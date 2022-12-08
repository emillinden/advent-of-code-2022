const fs = require("fs");
const t = fs
    .readFileSync("input/4.txt", "utf-8")
    .split("\n")
    .map((x) => x.split(",").map((y) => y.split("-").map((z) => +z)));

function p1() {
    let s = 0;
    for (const [a, b] of t) s += (a[0] <= b[0] && a[1] >= b[1]) || (b[0] <= a[0] && b[1] >= a[1] && 1);
    return s;
}

function p2() {
    let s = 0;
    for (const [a, b] of t) s += (a[0] <= b[0] && a[1] >= b[0]) || (b[0] <= a[0] && b[1] >= a[0] && 1);
    return s;
}

console.log(p1());
console.log(p2());
