---
title: Getting Started
description: First step is to clone the K2-template.
image: img/thumbnail.png
sidebar_label: Getting Started
---

# Getting Started

First step is to clone the [K2-template](https://github.com/koii-network/task-template).

:::info

Make sure you have [node](https://nodejs.org/en/), npm and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) installed before going forward.

:::

# Steps

1. Open the terminal inside a directory of your choice.
2. Run the following command:

```bash
git clone https://github.com/koii-network/task-template.git google-doodle
```

3. Change the directory and install all the dependencies, using this command:

```bash
cd google-doodle && yarn add puppeteer cheerio
```

4. Open the `google-doodle` directory on your code editor. We will be using a Class template for creating this task, so replace the entire code in the `coreLogic.js` file with the template below:

```javascript
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const { namespaceWrapper } = require("./namespaceWrapper");

class CoreLogic {
  async task() {}

  async fetchSubmission() {}

  async submitTask(roundNumber) {}

  async validateNode(submission_value) {}

  async auditTask(roundNumber) {
    console.log("auditTask called with round", roundNumber);
    console.log(
      await namespaceWrapper.getSlot(),
      "current slot while calling auditTask"
    );
    await namespaceWrapper.validateAndVoteOnNodes(
      this.validateNode,
      roundNumber
    );
  }

  async generateDistributionList(round) {}

  async submitDistributionList(round) {
    console.log("SubmitDistributionList called");

    const distributionList = await this.generateDistributionList(round);

    const decider = await namespaceWrapper.uploadDistributionList(
      distributionList,
      round
    );
    console.log("DECIDER", decider);

    if (decider) {
      const response = await namespaceWrapper.distributionListSubmissionOnChain(
        round
      );
      console.log("RESPONSE FROM DISTRIBUTION LIST", response);
    }
  }

  validateDistribution = async (distributionListSubmitter, round) => {};

  async auditDistribution(roundNumber) {
    console.log("auditDistribution called with round", roundNumber);
    await namespaceWrapper.validateAndVoteOnDistributionList(
      this.validateDistribution,
      75
    );
  }
}

const coreLogic = new CoreLogic();

module.exports = {
  coreLogic,
};
```

Next up, we writing the logic of the google-doodle task.
