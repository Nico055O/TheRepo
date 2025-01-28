---
layout: post
title: Autoscale Configuration Guide
description: How to configure Kasm to automatically scale agents
type: ccc
categories: ['Kasm']
menu: nav/kasm_cloud.html
toc: True
comments: True
permalink: /kasm/multiserver/autoscale
author: Rachit Jaiswal
---

## Step 1: Licensing the Kasm Workspaces Installation

A key is required to activate Kasm Enterprise Concurrent features. Keys will be updated based on evaluation and licensing periods. The keys are time-based and will expire on the due date. Become familiar with Kasm Enterprise Concurrent licensing on [Kasm Licensing](https://www.kasmweb.com/docs/latest/license.html).

- Enterprise allows autoscaling configuration.  The ability to automatically provision and destroy Servers and Docker Agents based on user demand.
- Concurrent refers to the number of user sessions that can run at one time.

### Edit License Key
Go to the administration menu to add a license: <code>Diagnostics &gt; System Info &gt; Licenses</code>.

Use the "Add License" button and enter the key you obtained from Kasm.

## Step 2: Update Deployment Zone

Deployment Zones are created to enable the logical grouping of Kasm services, i.e., workspaces. Go to [Kasm Deployment Zones](https://www.kasmweb.com/docs/latest/guide/zones/deployment_zones.html) to become familiar with their purpose and functionality.

### Restricting Workspaces to Certain Users

By default, all users are placed in a single zone (zone1 based on our installation).

For the Poway district, we want specialized network enclaves where only certain Workspaces and certain Users are allowed access.
- Restrict certain [Workspaces](https://www.kasmweb.com/docs/latest/glossary.html#term-Workspace) to only provision on Agents within a given Deployment Zone.
- See [Add/Edit Kasm Workspace](https://www.kasmweb.com/docs/latest/guide/workspaces.html#add-edit-workspaces) for more details.

### Edit Deployment Zone

Go to the admin menu: <code>Infrastructure &gt; Zones</code>. Locate the zone(s) and select edit with the pencil icon. Review our specific requirements below:

| Field                 | Description                                      |
|-----------------------|--------------------------------------------------|
| Zone Name             | Name of the zone (e.g., zone1)                   |
| Allow Origin Domain   | Kasm domain (e.g., kasm.nighthawkcodingsociety.com) |
| Upstream Auth Address | The Kasm-web "Private IPv4 address" from AWS     |
| Others                | Leave as default                                 |

## Step 3: Create Pool

Pools are used in Kasm configuration to manage Docker Agents. Users will see a single Workspace icon on their dashboard, but their session will be distributed to an available server in the pool. Go to [Kasm Pools](https://www.kasmweb.com/docs/latest/guide/compute/pools.html) to become familiar with their purpose and functionality.

Inside a pool, there are items that are managed within the pool:
- `VM Provider Config`: The virtual machine vendor used to support servers in the pool.
- `Autoscale Configs`: The rules for creating new servers to support users entering the pool.

`Alert`.  It is best review these configs in a working `Pool` setup, compare and edit in new `Pool` as you work through each configuration item.

### Edit Pool

Go to <code>Infrastructure &gt; Pools</code>.

Use the "Add" button and enter the details.

| Field            | Description                        |
|------------------|------------------------------------|
| Name             | Name of the pool (e.g., autoscaler)|
| Type             | Docker Agent                       |

### Step 3.1: Create VM Provider Config

This configuration manages important AWS details like Region, AMI, and startup Scripts. 

Go to <code>Infrastructure &gt; Pools</code>. Click on the button that says <code>All VM Provider Configs</code>.

Use the "Add" button for new configuration.  Or select pencil icon to edit existing configuration.


| Field                                 | Description                                                                                     | Recommended Value                                             |
|---------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| VM Provider Configs                   | If you want to create a new config or edit one                                                  | Create new (unless you are editing)                           |
| Provider                              | Which cloud provider you are using                                                              | AWS                                                           |
| Name                                  | Choose preferred name of hosting config                                                         | N/A                                                           |
| AWS Access Key ID                     | Get this by running the command <code>cat ~/.aws/credentials</code> or something similar        | Output                                                        |
| AWS Secret Access Key                 | Get this by running the command <code>cat ~/.aws/credentials</code> or something similar        | Output                                                        |
| AWS Region                            | Region where Kasm is running on AWS where it will build servers                                 | us-west-#                                                     |
| AWS: EC2 AMI Id                       | AMI ID for instances. Cannot use ubu24 as it is not supported yet.                              | ami-0075013580f6322a1 (ubu22)                                 |
| AWS: EC2 Instance Type                | Type of instance for AWS                                                                        | t3.medium / c6a.8xlarge                                       |
| AWS Max EC2 Nodes                     | Depends on instance...                                                                          | 15                                                            |
| AWS: EC2 Security Group IDs           | ID of the security group that Kasm runs on                                                      | ["sg-idhere"]                                                 |
| AWS: EC2 Subnet ID                    | ID of the subnet the web server is running on. Can be found in the description of the instance. | subnet-idhere                                                 |
| AWS: EC2 EBS Volume Size              | Size of EC2 instance volume                                                                     | 50                                                            |
| AWS: EC2 EBS Volume Type              | Type of EC2 volume                                                                              | gp2 / gp3                                                     |
| AWS: EC2 Custom Tags                  | Custom EC2 tags                                                                                 | {}                                                            |
| AWS: EC2 Startup Script               | Script to set up Kasm                                                                           | Shown Below "Adapted EC2 Startup Script" |
| AWS Config Override                   | AWS configuration override parameters                                                           | {"instance_config": {}}                                       |
| Retrieve Windows VM Password from AWS | N/A since we don't use Windows                                                                  | Disabled                                                      |
| SSH Keys                              | SSH keys you want to use to access the VM                                                       | Use the deployer keys stated for the machine, but can use any |

#### Adapted EC2 Startup Script

Obtain the [Kasm EC2 Startup Script](https://github.com/kasmtech/workspaces-autoscale-startup-scripts/blob/develop/1.15.0/docker_agents/ubuntu.sh)

The AWS Internal IP did not work in script as obtained from Kasm Web Site did not work.  It was switched to obtain the `IP` using the more conventional `hostname -I`.  This is simply done by commenting out the `AWS Internal IP` line and using `OCI Internal IP`.

Comment out AWS `IP` assignment lines

```sh
#AWS Internal IP
#IP=(`curl -s http://169.254.169.254/latest/meta-data/local-ipv4`)

#AWS Public IP
#IP=(`curl -s http://169.254.169.254/latest/meta-data/public-ipv4`)
```

Activate `IP` assignment from OCI Internal IP.  BTW, this is more common way to obtain an IP

```sh
# OCI Internal IP
IP=(`hostname -I | cut -d  ' ' -f1 |  tr -d '\\n'`)
```

### Step 3.2: Create Autoscale Config

<p>Go back to <code>Infrastructure &gt; Pools</code>. Click the button that says <code>All Autoscale Configs</code>. It will be there if the license is accepted.</p>

<p>Add an autoscale config. Use the Parameters Below:</p>

#### Page 1: Autoscale Details

This configuration manages details and rules to create a new server.  There page contains rule for when to autscale, for example the need for a certain amount of cores and memory required for standby. It also has a standby time when to stop the server.

| Field                 | Description                                                                                                               | Recommended Values |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------|--------------------|
| Name                  | Put in the autoscale config name                                                                                          | N/A                |
| Autoscale Type        | Set to "Docker Agent"                                                                                                     | N/A                |
| Pool                  | Set to created pool                                                                                                       | N/A                |
| Enabled               | Should be activated                                                                                                       | Enabled            |
| Aggressive Scaling    | Optional, but recommended                                                                                                 | Enabled            |
| Deployment Zone       | Set to created zone                                                                                                       | N/A                |
| Standby Cores<em>     | Cores available                                                                                                           | 2                  |
| Standby GPUs</em>     | GPUs available                                                                                                            | 0                  |
| Standby Memory*       | RAM available                                                                                                             | 5536               |
| Downscale Backoff     | Time for instances to shut off if not being used                                                                          | 900                |
| Agent Cores Override  | Forceful usage of agent server cores                                                                                      | 4                  |
| Agent GPUs Override   | Forceful usage of agent server GPUs                                                                                       | 0                  |
| Agent Memory Override | Forceful usage of agent memory (rec value tbr)                                                                            | 5536               |
| Nginx Cert            | Go to  <code>/opt/kasm/current/certs/</code>  on the web server, and pull the nginx cert, that begins with "Begin Nginx Certificate" | N/A                |
| Nginx Key             | Go to  <code>/opt/kasm/current/certs/</code>  on the web server, and pull the nginx cert, that begins with "Begin Nginx Certificate" | N/A                |
| Register DNS          | Google it                                                                                                                 | Disabled           |

#### Paged 2: VM Provider Configs

This page cycles to the VM Provider Config discussed in previous section.

## Step 4: Autoscale Testing

To quickly test if your autoscaling is working use [Session Staging](https://www.kasmweb.com/docs/latest/guide/staging.html).  This bring up agents and allow you to see if configuration is running correctly.  However, this method was not recommended for scheduling pre-provion of containers by Kasm support.

### Session Stagging Workflow

Use this workflow to test configurations after changes to development.

1. Add a Session Stagging configuration. Activates testing of Agents.
2. Go to <code>Infrastructure &gt; Docker/Agents</code>.
  - Observe starting of Agents
  - See that Agents go from Null IP address to a AWS Private IP address.
  - See that you reach desired sessions, this will take some math.
3. Delete Session Stagging configuration. Agents should retire based off of Downscale Backoff


Go to <code>Sessions &gt; Staging</code>. Add a new staging config. Choose the workspace, zone, desired sessions, expiration, and the pool and autoscale config you just made. Allow all permissions except printing. A sample config is shown below.

| Field                | Sample Input                 |
|----------------------|------------------------------|
| Workspace            | Ubuntu 22.04 Student Edition |
| Zone                 | zone1                        |
| Desired Sessions     | 25                           |
| Expiration           | 1                            |
| Pool                 | autoscaler                   |
| AutoScale Config     | autoscaler-main              |
| Allow Audio - Webcam | Enabled                      |
| Allow Printing       | Disabled                     |
