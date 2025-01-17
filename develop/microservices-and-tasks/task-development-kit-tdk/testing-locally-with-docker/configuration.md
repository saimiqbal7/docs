---
title: Configuration
description: Depending on the types of tasks you are developing, you may require custom configuration of the docker container.
image: img/thumbnail.png
sidebar_label: Configuration
---

# Configuration

Depending on the types of tasks you are developing, you may require custom configuration of the docker container. There will be an environment variable file which will allow you to pass any required custom variables to the docker task node.

**Environment Variables Explanation:**

All environment variables are are located in `.env-local`:

```bash
######################################################
################## DO NOT EDIT BELOW #################
######################################################
# Location of main wallet
WALLET_LOCATION="/app/config/id.json"
# Node Mode
NODE_MODE="service"
# The nodes address
SERVICE_URL="http://localhost:8080"
# For CI/CD purpose to automate the staking wallet creation
INITIAL_STAKING_WALLET_BALANCE=1
# Intial balance for the distribution wallet which will be used to hold the distribution list.
INITIAL_DISTRIBUTION_WALLET_BALANCE=1
# Global timers which track the round time, submission window and audit window and call those functions
GLOBAL_TIMERS="true"
# environment
ENVIRONMENT="development"
# HAVE_STATIC_IP is flag to indicate you can run tasks that host APIs
# HAVE_STATIC_IP=true
# To be used when developing your tasks locally and don't want them to be whitelisted by koii team yet
RUN_NON_WHITELISTED_TASKS=true
# Connection info for redis
REDIS_IP="redis"
REDIS_PORT=6379
REDIS_PASSWORD=""
# The address of the main trusted node
# TRUSTED_SERVICE_URL="https://k2-tasknet.koii.live"
# Location of K2 node
K2_NODE_URL="https://k2-testnet.koii.live"
######################################################
################ DO NOT EDIT ABOVE ###################
######################################################

# Tasks to run and their stakes. This is the varaible you can add your Task ID to after
# registering with the crete-task-cli. This variable supports a comma separated list:
# TASKS="id1,id2,id3"
# TASK_STAKES="1,1,1"
TASKS=""
TASK_STAKES=1

# User can enter as many environment variables as they like below. These can be task
# specific variables that are needed for the task to perform it's job. Some examples:
# Secrets must follow this convention for task to be able to use it (SECRET_<secret name>)
SECRET_WEB3_STORAGE_KEY=""
TWITTER_CONSUMER_KEY=""
TWITTER_CONSUMER_SECRET=""
TWITTER_BEARER_TOKEN=""
```
