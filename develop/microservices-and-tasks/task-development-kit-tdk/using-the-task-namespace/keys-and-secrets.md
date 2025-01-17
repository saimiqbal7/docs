---
title: Keys and Secrets
description: When a Task Node executes tasks, some keys and secrets are injected and made accessible to the task executable by using the `process.argv()` property.
image: img/thumbnail.png
sidebar_label: Keys and Secrets
---

# Keys and Secrets

When a Task Node executes tasks, some keys and secrets are injected and made accessible to the task executable by using the `process.argv()` property. These keys and secrets are command-line arguments that have been passed into the NodeJS [Child process](https://nodejs.org/api/child_process.html).

These keys and secrets include:

```typescript
// TASK_NAME
// TASK_ID
// EXPRESS_PORT
// NODE_MODE
// MAIN_ACCOUNT_PUBKEY
// SECRET_KEY
// K2_NODE_URL
// SERVICE_URL
// STAKE
```

## How Does This Work?

The NodeJS `child_process.fork()` method is used to spawn a new Node.js process and a [`ChildProcess`](https://nodejs.org/api/child_process.html#class-childprocess) object is returned.&#x20;

The `fork()` method accepts the following three arguments:

- `modulePath` — A `string` for a JavaScript file to execute on the child process (required)
- `args` — An `array`of `string` to pass as the child process arguments
- `options` — An `object` that you want to pass to the child process

```javascript
fork("file.js", ["argument"], options);
```

The second argument passed to the `fork()` method will be accepted by the child process as command-line arguments, which you can retrieve in a Koii Task using the `process.argv()` property:

```javascript
const TASK_NAME = process.argv[2];
const TASK_ID = process.argv[3];
const EXPRESS_PORT = process.argv[4];
const NODE_MODE = process.argv[5];
const MAIN_ACCOUNT_PUBKEY = process.argv[6];
const SECRET_KEY = process.argv[7];
const K2_NODE_URL = process.argv[8];
const SERVICE_URL = process.argv[9];
const STAKE = Number(process.argv[10]);
```

If you're using the k2-task-template to create a task, you should see the keys and secrets already retrieved in the `init.js` file:

```javascript
const express = require("express");
const TASK_NAME = process.argv[2];
const TASK_ID = process.argv[3];
const EXPRESS_PORT = process.argv[4];
const NODE_MODE = process.argv[5];
const MAIN_ACCOUNT_PUBKEY = process.argv[6];
const SECRET_KEY = process.argv[7];
const K2_NODE_URL = process.argv[8];
const SERVICE_URL = process.argv[9];
const STAKE = Number(process.argv[10]);

const app = express();

console.log("SETTING UP EXPRESS", NODE_MODE);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(EXPRESS_PORT, () => {
  console.log(`${TASK_NAME} listening on port ${EXPRESS_PORT}`);
});

module.exports = {
  app,
  NODE_MODE,
  TASK_ID,
  MAIN_ACCOUNT_PUBKEY,
  SECRET_KEY,
  K2_NODE_URL,
  SERVICE_URL,
  STAKE,
};
```
