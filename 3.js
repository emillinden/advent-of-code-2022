const fs = require("fs");
const z = fs.readFileSync("input/3.txt", "utf-8");
const t = z.split("\n");

const v = (s) => s.charCodeAt() - (s.charCodeAt() < 97 ? 38 : 96);

function p1() {
    let s = 0;
    
    for (let i = 0; i < t.length; i++) {
        const l = t[i].length;
        const m = l / 2;
        const [a, b] = [t[i].slice(0, m).split(""), t[i].slice(m, l)]

        for (let j = 0; j < a.length; j++) {
            const c = a[j];
            
            if (b.includes(c)) {
                s += v(c);
                break;
            }
        }
    }

    return s;
}

function p2() {
    let s = 0;
    const g = t.reduce((a, c, i) => {
        if (!(i % 3)) a.push([]);
        a[a.length - 1].push(c);
        return a;
    }, []);
    
    for (let i = 0; i < g.length; i++) {
        const l = g[i][0].split("");
        for (let j = 0; j < l.length; j++) {
            if (g[i][1].includes(l[j]) && g[i][2].includes(l[j])) {
                s += v(l[j]);
                break;
            }
        }
    }

    return s;
}

console.log(p1());
console.log(p2());