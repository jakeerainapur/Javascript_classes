const scan = require("prompt-sync")();

let n = Number(scan("Enter a number: "));

for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "* ".repeat(i));
}