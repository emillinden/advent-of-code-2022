const fs = require("fs");
const input = fs.readFileSync("input/7.txt", "utf8").trim().split("\n$ ").slice(1);

// Initially this was kind of hard, but when boiled down
// down it was actually kind of easy. Could've gone recursive
// instead of using a stack. Might revisit later, could need
// some semantic sugar as well.
function p() {
    const filesizes = {};
    let currentDir = [];
    for (const group of input) {
        for (const line of group.split("\n")) {
            const [command, argument] = line.replace("$ ", "").split(" ");
            switch (command) {
                case "cd":
                    currentDir = argument === ".." ? currentDir.slice(0, -1) : [...currentDir, argument];
                    break;
                case "ls":
                case "dir":
                    break;
                default:
                    // Could've gone recursive here instead of using a stack
                    if (Number.isInteger(parseInt(command))) {
                        const path = currentDir.join("/");
                        if (!filesizes[path]) {
                            filesizes[path] = 0;
                        }
                        filesizes[path] += parseInt(command);

                        for (let i = 0; i < currentDir.length; i++) {
                            const parentPath = currentDir.slice(0, i).join("/");
                            if (!filesizes[parentPath]) {
                                filesizes[parentPath] = 0;
                            }
                            filesizes[parentPath] += parseInt(command);
                        }
                    }

                    break;
            }
        }
    }

    return filesizes;
}

function p1() {
    return Object.entries(p()).reduce((c, [path, filesize]) => (filesize <= 100000 ? c + filesize : c), 0);
}

function p2() {
    let filesizes = p();
    return Object.entries(filesizes)
        .sort(([, a], [, b]) => a - b)
        .find(([path, filesize]) => filesize >= 30000000 - (70000000 - filesizes[""]))[1];
}

console.log(p1());
console.log(p2());
