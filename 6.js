const fs = require("fs");
const t = fs.readFileSync("input/6.txt", "utf8");

function p(v) {
    for (let i = 0; i < t.length; i++) {
        if (new Set(t.slice(i, i + v)).size === v) return i + v;
    }
}

console.log(p(4));
console.log(p(14));