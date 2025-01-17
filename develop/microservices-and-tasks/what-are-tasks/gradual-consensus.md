---
title: Runtime Flow
description: Gradual Consensus - Act quickly, react faster, and reward slowly.
image: img/thumbnail.png
sidebar_label: Runtime Flow
---

import Description from "@site/src/components/description";
import ContentLink from "@site/src/components/contentLink";

# Runtime Flow

![banner](<../img/Gradual%20Consensus%20(1).png>)

<Description
  text="Gradual Consensus - Act quickly, react faster, and reward slowly."
/>

While the task standard supports a wide range of possible applications, the most straightforward approach is to follow a multi-round confirmation process, which we refer to as **Gradual Consensus**.

## **Why is it gradual?**

One of the major limitations of stake-based games is the potential for an actor with a large amount of tokens to temporarily take over the system and potentially even extract rewards unfairly. Koii Tasks naturally avoid this issue by slowing down reward distributions and using proportionately high numbers of audit nodes compared to task executors.

## **How does it work?**

The key to building community-based products is to regularly appraise contributions through a commonly agreed on set of rules. Under the Koii model, this system runs in [regularly timed rounds](#the-task-lifecycle), during which each participating device participates as much as it can, and rewards or penalties are regularly deployed to correct the course of the system towards a desired outcome.

In each task cycle, there must be:

1. Work to do
2. A mechanism to review work done by other participants
3. [Rewards for good behaviour](../task-development-guide/k2-task-template/distribution-functions)
4. [Penalties for bad behaviour](../task-development-guide/k2-task-template/audit-function)

For help designing your task, you might want to try using the Task Organizer, which provides a simple whiteboard for brainstorming your product.

<ContentLink title="Task Outline" link="https://www.figma.com/community/file/1220194939977550205" imageLink="https://static.figma.com/uploads/1a667ef53b7c4837049399d0593ffca39e0bec9e" description="Figma" bottomText="Copy this whiteboard to start brainstorming how your task will work." />

Note: In most cases, the actual management of (3) and (4) above depends on [tracking digital signatures](../task-development-kit-tdk/using-the-task-namespace/wallet-signatures) from participating nodes, community members, or outside oracle services. Reviewing these signatures is usually referred to as an ['audit'](../task-development-guide/k2-task-template/audit-function).

![banner](../img/consensus_image_two.png)

Gradual consensus is a multi-round game under which nodes first perform a task, and then vote on a reward distribution. It's important to understand that while the process takes two rounds to complete, each cycle operates independently once per round, such that there is always one cycle starting and completing within every round.

## **The Task Lifecycle**

![banner](../img/ROUNDS_NoNote.png)

### 1. **Submission Phase**

During this phase, the Task Node(s) submit data to K2 to request rewards for work they've done.

- The first submission phase occurs during the **Review Period,** each Task Node submits proofs of work done during the **Work Period** to K2, and these _proofs_ are in turn audited by other participating nodes still in the Review Period.&#x20;
- The second submission phase occurs during the **Distribution Period,** where the selected Task Node submits the Distribution List to K2.

### 2. **Audit** **Phase**

During this phase, the participating nodes verify data submitted to K2.

- The first audit phase occurs during the **Review Period** after the submission phase. Each participating node audits _proofs_ submitted by other nodes, if there is an invalid submission, an Audit is triggered on K2, and the stake can be confiscated from the offending node. While the nodes are verifying data submitted on-chain, they're also checking if an Audit has been raised against a node, and they can either vote in favour of or against the Audit.&#x20;
- The second audit phase occurs during the **Distribution Period** after the selected node submits the Distribution list on-chain. Each participating node audits the Distribution list submitted by the selected node. After auditing, if the Distribution list is invalid, a newly selected node generates a Distribution new list and submits it on-chain.

### 3. **Distribution Phase**

This is the final step once the Distribution list has been validated, rewards are distributed among participating nodes.

At first, it can be difficult to imagine this process, but a helpful analogy would be a batch production line, where one group produces a product all day while the other evaluates its quality and may reject entire batches or penalize individual workers for sub-par performance.

### **Applications**

Gradual Consensus works well on tasks that have a deterministic outcome but requires some significant computation that cannot be done on-chain on networks like Ethereum or Solana due to computation costs or network call limitations. Some particular applications include web scraping, indexing on-chain content, compiling or hosting web apps or sites, or even managing databases and caches of on-chain content.
