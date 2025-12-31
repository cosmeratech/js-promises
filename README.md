# JS Promises Chores Demo :

A simple JavaScript project demonstrating asynchronous programming using Promises. This example simulates a sequence of household chores to illustrate promise chaining, state resolution, and error handling.

## Overview :

This project mimics a real-life scenario where tasks need to be completed in a specific order. It uses JavaScript Promise objects to handle asynchronous operations, illustrating how to manage dependent tasks and handle failures gracefully.

## Features :

- Sequential Execution: Demonstrates how to chain promises using .then() to ensure tasks happen in a specific order.
- Error Handling: Shows how to catch errors using .catch() if any step in the chain fails.
- Asynchronous Simulation: Uses setTimeout to mimic the delay/time taken for real-world tasks.

## How It Works :

The script defines three main functions, each returning a Promise:

1. cleanKitchen(): Resolves if the kitchen is successfully cleaned.
2. waterPlants(): Resolves if the plants are watered.
3. cookDinner(): Resolves if dinner is cooked.

### Execution Flow :
The code executes the tasks in the following chain:
cleanKitchen -> waterPlants -> cookDinner

If any task fails (starts with a boolean flag set to false), the chain stops immediately, and the error message is logged to the console.
