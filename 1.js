const fs = require("fs");
const s = fs.readFileSync("input/1.txt", "utf-8").split(/\n/);

function d() {
    let v = [];
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "" || i === 0) {
            j++;
            v[j] = 0;
            continue;
        }
        
        v[j] += +s[i];
    }

    v.sort((a,b) => b-a);

    return v;
}

function p1() {
    return d()[0];
}

function p2() {
    const v = d();
    return v[0] + v[1] + v[2];
}

console.log(p1());
console.log(p2());