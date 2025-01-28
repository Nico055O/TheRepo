---
layout: post
title: S3 Persistent Storage
description: How to configure Kasm to Store Persistent Data on S3
type: ccc
categories: ['Kasm']
menu: nav/kasm_cloud.html
toc: True
comments: True
permalink: /kasm/multiserver/persistent
author: Rachit Jaiswal
---

<p>Guide on how to configure S3 for persistent storage configuration.</p>

<h2>Step 1: Create a bucket</h2>

<p>Go to AWS S3 and create a bucket.</p>

<h2>Step 2: Define AWS access and secret keys</h2>

<p>The administrator needs to define the AWS Access Key ID and Access Secret in the Server Settings of Kasm.</p>

<h2>Step 3: Configure the persistent profile path in the workspace image</h2>

<p>See Persistent Profile guide, just change the path to something like this:</p>


```python
s3://kasm-profile.s3.amazonaws.com/ubuntu_22_04/{username}/
```

<p>This will store the profile in the S3 bucket.</p>

<h2>Step 4: Make sure to change the bucket policy</h2>


```python
json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PolicyForAllowKasmS3UserReadWrite",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::<some arn number>:user/jm1021"
            },
            "Action": [
                "s3:GetObject",
                "s3:PutObject",
                "s3:DeleteObject"
            ],
            "Resource": "arn:aws:s3:::kasm-profile/*"
        },
        {
            "Sid": "PolicyForAllowKasmS3UserListLocate",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::<some arn number>:user/jm1021"
            },
            "Action": [
                "s3:ListBucket",
                "s3:GetBucketLocation"
            ],
            "Resource": "arn:aws:s3:::kasm-profile"
        }
    ]
}
```
