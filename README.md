# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous route handlers.  When an asynchronous operation within a route throws an error, and that error isn't properly caught and handled, the server crashes.  This example shows the problem and its solution.

## Problem

The `bug.js` file contains an Express.js server with a route that performs an asynchronous operation. This operation intentionally throws an error.  Because the error is not caught, the server crashes when the error occurs. 

## Solution

The `bugSolution.js` file demonstrates the correct way to handle the error.  The `.catch()` method is used to catch any errors thrown by the asynchronous operation and provides a robust way to respond appropriately (e.g. sending an error response to the client).