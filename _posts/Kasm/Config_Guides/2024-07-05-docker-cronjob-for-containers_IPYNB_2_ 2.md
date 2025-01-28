---
layout: post
title: Cronjob for Container Restart
description: How to create a cronjob to check if the Kasm Docker images are running and auto-start them if not.
type: ccc
courses: {}
menu: nav/kasm_cloud.html
toc: True
comments: True
permalink: /kasm/config/docker_cronjob_for_containers
author: Rachit Jaiswal
---

<ol>
<li><strong>Create a Script to Check the Docker Container and Manage Port 443:</strong></li>
</ol>

<p>Create a script, say <code>check_and_restart_docker.sh</code>, with the following content:</p>

<p>```bash
   #!/bin/bash</p>

<p># Docker container ID to check
   CONTAINER_ID="875ca0bef633"</p>

<p># Check if the Docker container is running
   if ! docker ps | grep -q "$CONTAINER_ID"; then
     echo "Docker container $CONTAINER_ID is not running."</p>

<pre><code> # Find the process using port 443
 PID=$(sudo lsof -t -i:443)
</code></pre>

<pre><code> if [ -n "$PID" ]; then
   echo "Killing process $PID using port 443."
   sudo kill -9 $PID
 fi
</code></pre>

<pre><code> # Start the Docker container
 echo "Starting Docker container $CONTAINER_ID."
 docker start $CONTAINER_ID
</code></pre>
<p>else
     echo "Docker container $CONTAINER_ID is running."
   fi
   ```</p>

<ol>
<li><strong>Make the Script Executable:</strong></li>
</ol>

<p><code>bash
   sudo chmod +x /path/to/check_and_restart_docker.sh</code></p>

<ol>
<li><strong>Create a Cron Job to Run the Script Periodically:</strong></li>
</ol>

<p>Open the cron job editor:</p>

<p><code>bash
   sudo crontab -e</code></p>

<p>Add the following line to run the script every 5 minutes (adjust the interval as needed):</p>

<p><code>bash
   */5 * * * * /path/to/check_and_restart_docker.sh &gt;&gt; /var/log/check_and_restart_docker.log 2&gt;&amp;1</code></p>

<p>This will run the script every 5 minutes and log the output to <code>/var/log/check_and_restart_docker.log</code>.</p>

<ol>
<li><strong>Save and Exit the Cron Job Editor:</strong></li>
</ol>

<p>Save the file and exit the editor (for <code>nano</code>, press <code>Ctrl+X</code>, then <code>Y</code>, and <code>Enter</code>).</p>

<p>This setup will ensure that the specified Docker container is checked every 5 minutes. If it is not running, it will kill any process using port 443 and restart the Docker container.</p>
