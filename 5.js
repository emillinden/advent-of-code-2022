const fs = require("fs");
const z = fs.readFileSync("input/5.txt", "utf-8");
let [r, n] = z.split("\n\n");

r = r.split("\n").map((a) => a.match(/.{1,4}/g).map((a) => a.trim().replace(/[^a-zA-Z0-9]/g, "")));
n = n.split("\n");

// Not too satisfied with this solution, but it 'll do
const x = [];
for (let i = 0; i < r[r.length - 1].length; i++) {
    x[i] = [];
    for (let j = 0; j < r.length; j++) {
        if (r[j][i] === "") {
            x[i].shift();
        } else {
            x[i].push(r[j][i]);
        }
    }
}

console.log(n[1]);
function p1() {
    const y = x.map((a) => a.slice()); // TIL you can't use y=[...x] on multidimensional arrays (it'll be a ref) ¯\_(ツ)_/¯
    for (let i = 0; i < n.length; i++) {
        const [q, f, t] = n[i].match(/\d+/g).map(Number);
        for (let j = 0; j < q; j++) {
            const e = y[f - 1].shift();
            y[t - 1].unshift(e);
        }
    }

    return y.map((a) => a[0]).join("");
}

function p2() {
    const y = x.map((a) => a.slice());
    for (let i = 0; i < n.length; i++) {
        const [q, f, t] = n[i].match(/\d+/g).map(Number);
        const e = y[f - 1].splice(0, q);
        y[t - 1].unshift(...e);
    }

    return y.map((a) => a[0]).join("");
}

console.log(p1());
console.log(p2());