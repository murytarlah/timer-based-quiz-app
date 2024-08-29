export const questions = [

    {
        question: "What is Solidity?",
        answers:[
        {text: "A programming language for writing smart contracts", correct: true},
        {text: "A database management system", correct: false},
        {text: "A web development framework", correct: false},
        {text: "A type of cryptocurrency", correct: false},
        ]
 },
 {
     question: "Which blockchain platform is Solidity primarily used for?",
     answers: [
         {text: "Ethereum", correct: true},
         {text: "Bitcoin", correct: false},
         {text: "Ripple", correct: false},
         {text: "Litecoin", correct: false},
     ]
 },
 {
     question: "What is a smart contract?",
     answers: [
        {text: "A self-executing contract with the terms directly written into code", correct: true},
        {text: "A traditional paper contract", correct: false},
        {text: "A type of cryptocurrency", correct: false},
        {text: "A web development tool", correct: false},
     ]
 },
 {
     question: "What keyword is used to define a contract in Solidity?",
     answers: [
         {text: "contract", correct: true},
         {text: "class", correct: false},
         {text: "function", correct: false},
         {text: "struct", correct: false},
     ]
 },
 {
     question: "What is the file extension for Solidity files?",
     answers: [
         {text: ".solidity", correct: false},
         {text: ".sol", correct: true},
         {text: ".eth", correct: false},
         {text: ".sc", correct: false},
     ]
 },
 {
     question: "Which version pragma is used to specify the Solidity compiler version?",
     answers: [
         {text: "version solidity", correct: false},
         {text: "pragma solidity", correct: true},
         {text: "pragma version", correct: false},
         {text: "pragma solidity", correct: false},
     ]
 },
 {
     question: "What is the purpose of the constructor function in Solidity?",
     answers: [
         {text: "To initialize state variables when a contract is deployed", correct: true},
         {text: "To define a new contract", correct: false},
         {text: "To create a new function", correct: false},
         {text: "To destroy a contract", correct: false},
     ]
 },
 {
     question: "What is the default visibility of state variables in Solidity?",
     answers: [
         {text: "public", correct: false},
         {text: "internal", correct: true},
         {text: "private", correct: false},
         {text: "external", correct: false},
     ]
 },
 {
     question: "Which keyword is used to define a function in Solidity?",
     answers: [
         {text: "def", correct: false},
         {text: "function", correct: true},
         {text: "func", correct: false},
         {text: "method", correct: false},
     ]
 },
 {
     question: "What is the purpose of the fallback function in Solidity?",
     answers: [
         {text: "To handle Ether sent to the contract that does not match any function signature", correct: true},
         {text: "To define a new contract", correct: false},
         {text: "To create a new function", correct: false},
         {text: "To destroy a contract", correct: false},
     ]
 },
 {
     question: "What is the purpose of the selfdestruct function in Solidity?",
     answers: [
         {text: "To create a new contract", correct: false},
         {text: "To initialize state variables", correct: false},
         {text: "To destroy the contract and send remaining Ether to a specified address", correct: true},
         {text: "To handle Ether sent to the contract", correct: false},
     ]
 },
 {
     question: "What is the purpose of the require function in Solidity?",
     answers: [
         {text: "To define a new contract", correct: false},
         {text: "To create a new function", correct: false},
         {text: "To validate conditions and revert if they are not met", correct: true},
         {text: "To destroy a contract", correct: false},
     ]
 },
 {
     question: "What is the purpose of the modifier keyword in Solidity?",
     answers: [
         {text: "To define a new contract", correct: false},
         {text: "To create a new function", correct: false},
         {text: "To change the behavior of functions", correct: true},
         {text: "To destroy a contract", correct: false},
     ]
 },
 {
     question: "What is the purpose of the mapping type in Solidity?",
     answers: [
         {text: "To define a new contract", correct: false},
         {text: "To create a new function", correct: false},
         {text: "To store key-value pairs", correct: true},
         {text: "To destroy a contract", correct: false},
     ]
 },
 {
     question: "What is the purpose of the event keyword in Solidity?",
     answers: [
         {text: "To define a new contract", correct: false},
         {text: "To log information to the blockchain", correct: true},
         {text: "To create a new function", correct: false},
         {text: "To destroy a contract", correct: false},
     ]
 },
 {
     question: "What is the purpose of the emit keyword in Solidity?",
     answers: [
         {text: "To destroy a contract", correct: false},
         {text: "To create a new function", correct: false},
         {text: "To define a new contract", correct: false},
         {text: "To trigger an event", correct: true},
     ]
 },
 {
     question: "What is the purpose of the struct keyword in Solidity?",
     answers: [
         {text: "To destroy a contract", correct: false},
         {text: "To create a new function", correct: false},
         {text: "To define a new contract", correct: false},
         {text: "To define a custom data type", correct: true},
     ]
 },
 {
     question: "What is the purpose of the enum keyword in Solidity?",
     answers: [
         {text: "To define a new contract", correct: false},
         {text: "To define a new function", correct: false},
         {text: "To define a custom enumeration type", correct: true},
         {text: "To destroy a contract", correct: false},
     ]
 },
 {
     question: "What is the purpose of the address type in Solidity?",
     answers: [
        {text: "To define a new contract", correct: false},
         {text: "To define a new function", correct: false},
         {text: "To store Ethereum addresses", correct: true},
         {text: "To destroy a contract", correct: false},
     ]
 },
 {
     question: "What is the purpose of the msg.sender variable in Solidity?",
     answers: [
        {text: "To define a new contract", correct: false},
        {text: "To define a new function", correct: false},
        {text: "To get the address of the caller of the function", correct: true},
        {text: "To destroy a contract", correct: false},
     ]
 },
 {
     question: "What is the purpose of the msg.value variable in Solidity?",
     answers: [
        {text: "To define a new contract", correct: false},
        {text: "To define a new function", correct: false},
        {text: "To get the amount of Ether sent with the transaction", correct: true},
        {text: "To destroy a contract", correct: false},
     ]
 },
 {
     question: "What is the purpose of the block.timestamp variable in Solidity?",
     answers: [
        {text: "To define a new contract", correct: false},
        {text: "To define a new function", correct: false},
        {text: "To get the timestamp of the current block", correct: true},
        {text: "To destroy a contract", correct: false},
     ]
 },
 {
     question: "What is the purpose of the block.number variable in Solidity?",
     answers: [
        {text: "To define a new contract", correct: false},
        {text: "To define a new function", correct: false},
        {text: "To get the number of the current block", correct: true},
        {text: "To destroy a contract", correct: false},
     ]
 },
 {
     question: "What is the purpose of the gasleft function in Solidity?",
     answers: [
         {text: "A function that returns another function", correct: false},
         {text: "To get the remaining gas for the current transaction", correct: true},
         {text: "A method to create synchronous operations", correct: false},
         {text: "A way to declare a constant value", correct: false},
     ]
 },
 {
     question: "What is the purpose of the payable keyword in Solidity?",
     answers: [
         {text: "To recieve airtime", correct: false},
         {text: "To allow payment of naira", correct: false},
         {text: "To define a function", correct: false},
         {text: "To allow a function to receive Ether", correct: true},
     ]
 },
 {
     question: "What is the purpose of the view keyword in Solidity?",
     answers: [
         {text: "To indicate that a nation does not modify state", correct: false},
         {text: "To indicate that a function does not modify state", correct: true},
         {text: "To indicate that a function does not modify a function", correct: false},
         {text: "To indicate that a function modify nation", correct: false},
     ]
 },
 {
     question: "What is the purpose of the pure keyword in Solidity?",
     answers: [
         {text: "Creates a new object with specified keys", correct: false},
         {text: "Checks if an object has specific keys", correct: false},
         {text: "Returns the values of the object's properties", correct: false},
         {text: "To indicate that a function does not read or modify state", correct: true},
     ]
 },
 {
     question: "What is the purpose of the external keyword in Solidity?",
     answers: [
         {text: "Merges two arrays into one", correct: false},
         {text: "Modifies the original array by removing elements", correct: false},
         {text: "To indicate that a function can only be called from outside the contract", correct: true},
         {text: "Sorts the array in place", correct: false},
     ]
 },
     {
     question: "What is the purpose of the internal keyword in Solidity?",
     answers: [
         {text: "To refers to the current function", correct: false},
         {text: "To refers to the global object", correct: false},
         {text: "To indicate that a function or variable is only accessible within the contract and derived contracts", correct: true},
         {text: "To refers to the previous object", correct: false},
     ]
 },
 {
     question: "What is the purpose of the private keyword in Solidity?",
     answers: [
         {text: "To indicate that a function or variable is only accessible within the contract", correct: true},
         {text: "To define privacy", correct: false},
         {text: "To ensure hidden function in a state", correct: false},
         {text: "To destroy an object", correct: false},
     ]
 },
 {
     question: "What is the purpose of the public keyword in Solidity?",
     answers: [
         {text: "Checks if a variable is an object", correct: false},
         {text: "To indicate that a function or variable is accessible from outside the contract", correct: true},
         {text: "Converts a value to a string", correct: false},
         {text: "Determines if a value is null or undefined", correct: false},
     ]
 },
 {
     question: "What is the purpose of the this keyword in Solidity?",
     answers: [
         {text: "To refer to a noun", correct: false},
         {text: "To refer to the current contract instance", correct: true},
         {text: "To complete a sentence", correct: false},
         {text: "To fix a sentence", correct: false},
     ]
 },
 {
     question: "What is the purpose of the super keyword in Solidity?",
     answers: [
         {text: "To call a function from a parent contract", correct: true},
         {text: "To define an array size", correct: false},
         {text: "To call a function from the state", correct: false},
         {text: "To get the length of a function", correct: false},
     ]
 },
 {
     question: "What is the purpose of the delegatecall function in Solidity?",
     answers: [
         {text: "To call another contract's function and use the caller's context", correct: true},
         {text: "To execute a function at regular intervals", correct: false},
         {text: "To delay the execution of a function indefinitely", correct: false},
         {text: "To execute a function immediately", correct: false},
     ]
 },
 {
     question: "What is the purpose of the call function in Solidity?",
     answers: [
         {text: "To call 1", correct: false},
         {text: "To call another contract's function", correct: true},
         {text: "To call 01", correct: false},
         {text: "To call 0", correct: false},
     ]
 },
 {
     question: "What is the purpose of the send function in Solidity?",
     answers: [
         {text: "Creates a new object with the same properties", correct: false},
         {text: "To send Ether to an address", correct: true},
         {text: "Merges two arrays into one", correct: false},
         {text: "Deletes properties from an object", correct: false},
     ]
 },
 {
     question: "What is the purpose of the transfer function in Solidity?",
     answers: [
         {text: "To transfer Ether to an address", correct: true},
         {text: "To transfer Ether to a function", correct: false},
         {text: "To transfer Ether to the app", correct: false},
         {text: "To receive money", correct: false},
     ]
 },
 {
     question: "What is the purpose of the assert function in Solidity?",
     answers: [
         {text: "To assess life", correct: false},
         {text: "To check conditions and throw an error if they are not met", correct: true},
         {text: "To access life", correct: false},
         {text: "To identify assesrtions", correct: false},
     ]
 },
 {
     question: "What is the purpose of the revert function in Solidity?",
     answers: [
         {text: "To revert the current transaction", correct: true},
         {text: "To revert the current function", correct: false},
         {text: "To reverse life", correct: false},
         {text: "To revert the current state", correct: false},
     ]
 },
 {
     question: "What is the purpose of the abi.encode function in Solidity?",
     answers: [
         {text: "Adds elements to an array", correct: false},
         {text: "To encode data into ABI format", correct: true},
         {text: "Sorts the array", correct: false},
         {text: "Creates a shallow copy of the ABI format", correct: false},
     ]
 },
 {
     question: "What is the purpose of the keccak256 function in Solidity?",
     answers: [
         {text: "To compute the Keccak-256 hash of the input", correct: true},
         {text: "To compute the Keccak-200 hash of the input", correct: false},
         {text: "To compute the Keccak-656 hash of the input", correct: false},
         {text: "To compute the Keccak-67 hash of the input", correct: false},
     ]
 },
 {
     question: "What is the purpose of the sha256 function in Solidity?",
     answers: [
         {text: "To compute the SHA-256 hash of the input", correct: true},
         {text: "To compute the SHA-200 hash of the input", correct: false},
         {text: "To compute the SHA-656 hash of the input", correct: false},
         {text: "To compute the SHA-67 hash of the input", correct: false},
     ]
 },
 {
     question: "What is the purpose of the ripemd160 function in Solidity?",
     answers: [
         {text: "To compute the RIPEMD-170 hash of the input", correct: false},
         {text: "To compute the RIPEMD-160 hash of the input", correct: true},
         {text: "To compute the RIPEMD-150 hash of the input", correct: false},
         {text: "To compute the RIPEMD-140 hash of the input", correct: false},
     ]
 },
 {
     question: "What is the purpose of the ecrecover function in Solidity?",
     answers: [
         {text: "To delete the address that signed a message", correct: false},
         {text: "To recover the address that signed a messagetrue", correct: true},
         {text: "To manage the address that signed a message", correct: false},
         {text: "None of the options", correct: false},
     ]
 },
 {
     question: "What is the purpose of the blockhash function in Solidity?",
     answers: [
         {text: "To get the block hash of a given block number", correct: true},
         {text: "To get the address of a given function", correct: false},
         {text: "To get the block hash of a given Alphabet", correct: false},
         {text: "To get the Wall hash of a given block", correct: false},
     ]
 },
 {
     question: "What is Web3?",
     answers: [
         {text: "A decentralized web where users have control over their data", correct: true},
         {text: "A new version of the World Wide Web", correct: false},
         {text: "A social media platform", correct: false},
         {text: "A type of cryptocurrency", correct: false},
     ]
 },
 {
     question: "What is the primary technology behind Web3?",
     answers: [
         {text: "Blockchain", correct: true},
         {text: "Cloud computing", correct: false},
         {text: "AI", correct: false},
         {text: "Virtual Reality", correct: false},
     ]
 },
 {
     question: "What is a dApp in the context of Web3?",
     answers: [
         {text: "A decentralized application", correct: true},
         {text: "A desktop application", correct: false},
         {text: "A data analysis program", correct: false},
         {text: "A digital asset", correct: false},
     ]
 },
 {
     question: "What is the role of smart contracts in Web3?",
     answers: [
         {text: "To automate and enforce agreements without intermediaries", correct: true},
         {text: "To create websites", correct: false},
         {text: "To manage databases", correct: false},
         {text: "To develop mobile apps", correct: false},
     ]
 },
 {
     question: "What is the purpose of a wallet in Web3?",
     answers: [
         {text: "To store and manage digital assets like cryptocurrencies", correct: false},
         {text: "To browse the internet", correct: true},
         {text: "To send emails", correct: false},
         {text: "To create smart contracts", correct: false},
     ]
 }
];