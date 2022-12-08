const fs = require("fs");
const t = fs.readFileSync("input/2.txt", "utf-8").split("\n");

const u = (a, b) => a.indexOf(b);
const y = (a, b) => u(a, b) + 1;
const k = ["A", "B", "C"];
const h = ["X", "Y", "Z"];

function p1() {
    let s = 0;

    for (let i = 0; i < t.length; i++) {
        const [a, x] = t[i].split(" ");
        const r = y(k, a) - y(h, x);
        s += (r === 0 ? 3 : r === -1 || r === 2 ? 6 : 0) + y(h, x);
    }

    return s;
}

function p2() {
    let s = 0;

    for (let i = 0; i < t.length; i++) {
        let [a, x] = t[i].split(" ");
        const g = x === "X" ? 0 : x === "Y" ? 3 : 6;
        s += g + ((u(k, a) + Math.sign(g - 3) + 3) % 3) + 1;
    }

    return s;
}

console.log(p1());
console.log(p2());
