const fs = require("fs")

const dir = "my-files"
fs.mkdirSync(dir)

for (let i=1; i<=100; i++) {
    // creates a file at my-files/num.txt 100 times
    fs.writeFileSync(`${dir}/${i}.txt`, `Hello from ${i}`)
}