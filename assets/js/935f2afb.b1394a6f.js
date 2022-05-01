"use strict";(self.webpackChunkstarknet_docs=self.webpackChunkstarknet_docs||[]).push([[53],{1109:function(t){t.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/docs/intro","docId":"intro"},{"type":"category","label":"Blocks & Transactions","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Block structure","href":"/docs/Blocks/header","docId":"Blocks/header"},{"type":"link","label":"Transaction Lifecycle","href":"/docs/Blocks/transaction-life-cycle","docId":"Blocks/transaction-life-cycle"},{"type":"link","label":"Transaction structure","href":"/docs/Blocks/transactions","docId":"Blocks/transactions"}]},{"type":"category","label":"Hashing","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Hash functions","href":"/docs/Hashing/hash-functions","docId":"Hashing/hash-functions"}]},{"type":"category","label":"CLI","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Commands","href":"/docs/CLI/commands","docId":"CLI/commands"}]},{"type":"category","label":"Contracts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Contract ABI","href":"/docs/Contracts/contract-abi","docId":"Contracts/contract-abi"},{"type":"link","label":"Contract Address","href":"/docs/Contracts/contract-address","docId":"Contracts/contract-address"},{"type":"link","label":"Contract Hash","href":"/docs/Contracts/contract-hash","docId":"Contracts/contract-hash"},{"type":"link","label":"Contract Storage","href":"/docs/Contracts/contract-storage","docId":"Contracts/contract-storage"}]},{"type":"category","label":"Data Availabilty","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"On-Chain Data","href":"/docs/Data Availabilty/on-chain-data","docId":"Data Availabilty/on-chain-data"}]},{"type":"category","label":"Events","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"StarkNet Events","href":"/docs/Events/starknet-events","docId":"Events/starknet-events"}]},{"type":"category","label":"Fees","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Fee Mechanism","href":"/docs/Fees/fee-mechanism","docId":"Fees/fee-mechanism"}]},{"type":"category","label":"L1<>L2 Communication","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Messaging Mechanism","href":"/docs/L1<>L2 Communication/messaging-mechanism","docId":"L1<>L2 Communication/messaging-mechanism"},{"type":"link","label":"StarkGate \u2013 Token Bridge","href":"/docs/L1<>L2 Communication/token-bridge","docId":"L1<>L2 Communication/token-bridge"}]},{"type":"category","label":"State","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"StarkNet State","href":"/docs/State/starknet-state","docId":"State/starknet-state"}]}]},"docs":{"Blocks/header":{"id":"Blocks/header","title":"Block structure","description":"In StarkNet, the block is defined as a list of transactions and a block header.","sidebar":"tutorialSidebar"},"Blocks/transaction-life-cycle":{"id":"Blocks/transaction-life-cycle","title":"Transaction Lifecycle","description":"The following are the possible statuses of transaction from the moment it the moment it is included in a proof validated by L1.","sidebar":"tutorialSidebar"},"Blocks/transactions":{"id":"Blocks/transactions","title":"Transaction structure","description":"StarkNet, in its Alpha version, supports two types of transactions: a Deploy transaction and an Invoke Function transaction. We describe the available fields for both of these transaction types and how the transaction hash is calculated in both cases.","sidebar":"tutorialSidebar"},"CLI/commands":{"id":"CLI/commands","title":"Commands","description":"All the CLI commands require the --network parameter, which can be either alpha-goerli or alpha-network.","sidebar":"tutorialSidebar"},"Contracts/contract-abi":{"id":"Contracts/contract-abi","title":"Contract ABI","description":"Contract ABI is a representation of a StarkNet contract\'s interface. It is formatted as a JSON and describes the functions, structs and events which are defined in the contract.","sidebar":"tutorialSidebar"},"Contracts/contract-address":{"id":"Contracts/contract-address","title":"Contract Address","description":"The contract address is a unique identifier of the contract on StarkNet. It is a chain hash of the following information:","sidebar":"tutorialSidebar"},"Contracts/contract-hash":{"id":"Contracts/contract-hash","title":"Contract Hash","description":"The contract\'s hash is a hash of its definition. The elements defining a contract are:","sidebar":"tutorialSidebar"},"Contracts/contract-storage":{"id":"Contracts/contract-storage","title":"Contract Storage","description":"Storage Layout","sidebar":"tutorialSidebar"},"Data Availabilty/on-chain-data":{"id":"Data Availabilty/on-chain-data","title":"On-Chain Data","description":"Introduction","sidebar":"tutorialSidebar"},"Events/starknet-events":{"id":"Events/starknet-events","title":"StarkNet Events","description":"A contract may emit events throughout its execution. Each event contains the following fields:","sidebar":"tutorialSidebar"},"Fees/fee-mechanism":{"id":"Fees/fee-mechanism","title":"Fee Mechanism","description":"In this section, we will review StarkNet Alpha 0.8.0 fee mechanism. If you want to skip the motivation and deep dive into the mechanism, you can skip directly to the final formula.","sidebar":"tutorialSidebar"},"Hashing/hash-functions":{"id":"Hashing/hash-functions","title":"Hash functions","description":"domain and range","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"What Is StarkNet","sidebar":"tutorialSidebar"},"L1<>L2 Communication/messaging-mechanism":{"id":"L1<>L2 Communication/messaging-mechanism","title":"Messaging Mechanism","description":"L1 \u2192 L2 Messages","sidebar":"tutorialSidebar"},"L1<>L2 Communication/token-bridge":{"id":"L1<>L2 Communication/token-bridge","title":"StarkGate \u2013 Token Bridge","description":"StarkGate General Architecture","sidebar":"tutorialSidebar"},"State/starknet-state":{"id":"State/starknet-state","title":"StarkNet State","description":"The state of StarkNet is a mapping between addresses (251 bit field elements) and contract\u2019s state.","sidebar":"tutorialSidebar"}}}')}}]);