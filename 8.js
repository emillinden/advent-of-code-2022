const fs = require("fs");
const input = fs
    .readFileSync("input/8.txt", "utf8")
    .split("\n")
    .map((row) => row.split("").map(Number));

function p1() {
    const visibleTrees = [];

    for (let i = 0; i < input.length; i++) {
        let highest = -1;

        // LTR
        for (let j = 0; j < input[i].length; j++) {
            const tree = input[i][j];
            const treeIndex = i + "-" + j + " " + tree;
            if (tree <= highest) continue;
            if (tree > highest) highest = tree;
            if (!visibleTrees.includes(treeIndex)) {
                visibleTrees.push(treeIndex);
            }
            if (tree >= 9) break;
        }

        // RTL
        highest = -1;

        for (let j = input[i].length - 1; j >= 0; j--) {
            const tree = input[i][j];
            if (tree <= highest) continue;
            if (tree > highest) highest = tree;
            const treeIndex = i + "-" + j + " " + tree;
            if (!visibleTrees.includes(treeIndex)) {
                visibleTrees.push(treeIndex);
            }
            if (tree >= 9) break;
        }
    }

    for (let i = 0; i < input[0].length; i++) {
        let highest = -1;

        // TTB
        for (let j = 0; j < input.length; j++) {
            const tree = input[j][i];
            if (tree <= highest) continue;
            if (tree > highest) highest = tree;
            const treeIndex = j + "-" + i + " " + tree;
            if (!visibleTrees.includes(treeIndex)) {
                visibleTrees.push(treeIndex);
            }
            if (tree >= 9) break;
        }

        // BTT
        highest = -1;

        for (let j = input.length - 1; j >= 0; j--) {
            const tree = input[j][i];
            if (tree <= highest) continue;
            if (tree > highest) highest = tree;
            const treeIndex = j + "-" + i + " " + tree;
            if (!visibleTrees.includes(treeIndex)) {
                visibleTrees.push(treeIndex);
            }
            if (tree >= 9) break;
        }
    }

    return visibleTrees.length;
}

function p2() {
    let bestScenicScore = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            const tree = input[i][j];
            let left = (right = up = down = 0);

            // Left
            for (let k = j - 1; k >= 0; k--) {
                left++;
                if (input[i][k] >= tree) break;
            }

            // Right
            for (let k = j + 1; k < input[i].length; k++) {
                right++;
                if (input[i][k] >= tree) break;
            }

            // Up
            for (let k = i - 1; k >= 0; k--) {
                up++;
                if (input[k][j] >= tree) break;
            }

            // Down
            for (let k = i + 1; k < input.length; k++) {
                down++;
                if (input[k][j] >= tree) break;
            }

            const scenicScore = left * right * up * down;
            bestScenicScore = Math.max(bestScenicScore, scenicScore);

            if (tree >= 9) break;
        }
    }

    return bestScenicScore;
}

console.log(p1());
console.log(p2());