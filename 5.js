const fs = require("fs");
const z = fs.readFileSync("input/5.txt", "utf-8");
let [r, n] = z.split("\n\n");

r = r.split("\n").map((a) => a.match(/.{1,4}/g).map((a) => a.trim().replace(/[^A-Z]/g, "")));
n = n.split("\n");

// "Improvement" from last commit.
//Not actually an improvement, but it looks cooler (and is also impossible to understand)
const x = r[r.length - 1].map((_, i) => r.reduce((c, o) => o[i] !== "" ? [...c, o[i]] : c, []));

function p1() {
    const y = x.map((a) => a.slice()); // TIL you can't use y=[...x] on multidimensional arrays (it'll still be a ref) ¯\_(ツ)_/¯
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