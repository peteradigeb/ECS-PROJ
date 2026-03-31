#!/bin/bash
/* eslint-env node */

var x = 10;
console.log(x);

function add(a, b) {
  return a + b;
}

// Simple test
if (add(2, 2) !== 4) {
  console.error("Test failed ❌");
  process.exit(1);
}

console.log("Test passed ✅");
