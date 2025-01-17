---
title: K2 - Tick, Tock, Fast Blocks
description: Fast transaction settlement and timestamps.
image: img/thumbnail.png
sidebar_label: K2 - Tick, Tock, Fast Blocks
---

import Description from "@site/src/components/description";

# K2 - Tick, Tock, Fast Blocks

<Description
  text="Fast transaction settlement and timestamps."
/>

K2 is the current settlement layer within Koii and provides the functionality of a message hub to other systems in the network. Thanks to the incredible work of the Solana Labs team, K2 is able to use [Proof of History](https://tokens-economy.gitbook.io/consensus/chain-based-proof-of-capacity-space/proof-of-history) to achieve 0.2-second transaction times and thousands of transactions per second.&#x20;

The Settlement Layer holds the KOII tokens, as well as an immutable ledger of transaction history, an active registry of open compute operations, and all [compute task](../microservices-and-tasks/what-are-tasks/) metadata.

**Heads up!** To use K2, you'll need to install the [Koii CLI](/develop/koii-software-toolkit-sdk/using-the-cli) or try the [Koii SDK](../koii-software-toolkit-sdk/what-is-the-koii-sdk), which provides vital functions such as creating wallets, sending transactions, and signing data.

## Native Programs

[Native programs](https://docs.solana.com/developing/runtime-facilities/programs) in K2 are used to extend the default Solana settlement functionality and have been used to modify things to optimize for off-chain compute and content-centric applications. The two native programs currently in use are the Task Contract and the Attention Game.

### The Task Contract

[Koii Task Nodes](../koii-software-toolkit-sdk/task-node-cli) use the Settlement Layer to submit proofs and request rewards for compute work. All Task related activities are managed by the built-in Task Contract, which is managed by the Koii foundation. Some of the operations the Task Contract supports are:

1. Pull a timestamp proof&#x20;
2. Submit proofs to claim task rewards
3. Trigger audit on a node's reward request
4. Submit a distribution event
5. Select a node for a distribution event
6. Fetch all submissions for a task

### The Attention Game

In order to ensure that Koii is owned by the community, and not only those with the means to provide compute, 90% of all newly generated tokens are created by the [Attention Contract](/concepts/earning-koii/proof-of-real-traffic/attention-mining). Each day, Koii nodes collect Proofs of Real Traffic and submit batches of them into decentralized storage. Every [Epoch](https://docs.solana.com/terminology#epoch) (roughly every 12 hours), a pool of new tokens is created and distributed to anyone who received attention on their content. Node operators can also earn new tokens by running a K2 Node, or by running the Attention Task on a Task Node, and helping to verify Proofs of Real Traffic or lock them into the Settlement Layer.
