const fs = require("fs");
// instead of toString WE CAN USE BELOW METHOD
const readstream = fs.createReadStream("./Docs/blog.txt", { encoding : "utf8"});
const writestream = fs.createWriteStream("./Docs/blog1.txt");
/*
readstream.on("data", (chunk) => 
{
    console.log("---new chunk---");
    console.log(chunk.toString());
    writestream.write("-new chunk-");
    writestream.write(chunk);
});*/
readstream.pipe(writestream);