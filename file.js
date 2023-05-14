const fs = require("fs");
//Read File
/*(fs.readFile("./Docs/blog.txt", (err, data) =>
{
    if(err)
    {console.log(err);}
    // console.log(data); this will give buffer value so convert to string
    console.log(data.toString());
});
console.log("hggfgfh");

//write to files
fs.writeFile("./Docs/blog.txt", "hello there" , () =>
   {console.log("file written");}
    );
fs.writeFile("./Docs/blog1.txt", "hello again" , () =>
   {console.log("file written");}
    );
// create directory and removing
if(!fs.existsSync("./assets")){
fs.mkdir("./assets", (err) =>{
    if(err){console.log(err);
    }
    console.log("folder created");
}
);}
else{
    fs.rmdir("./assets", (err) =>{
        if(err){console.log(err);
        }
        console.log("folder deleted");});
}*/
//deleting file
if(fs.existsSync("./Docs/blog1.txt")){
    fs.unlink("./Docs/blog1.txt", (err) => {
        if(err){console.log(err);}
        console.log("file deleted");
    })
}