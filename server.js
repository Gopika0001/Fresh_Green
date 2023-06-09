const http = require("http");
const fs = require("fs");
const _ = require("lodash");

// npm init to initialise json
const server = http.createServer((req, res) => 
{
  const num = _.random(0,20);  
  console.log(num);
  const greet = _.once(() =>
  {console.log("helloooo");
});
greet();
greet();

     let path = "./views/";
     switch(req.url){
      case "/":
        path += "index.html";
        res.statusCode = 200;
        break;
      case "/about":
        path += "about.html";
        res.statusCode = 200;
        break;
      case "/about-me":
          res.setHeader("Location", "/about");
          res.statusCode = 301;
          res.end();
          break;
      default:
        path += "404err.html";
        res.statusCode = 404;
        break;
     }

     fs.readFile(path, (err,data) =>
     {
        if(err)
        {console.log(err);
        res.end();
    }else{
      /*  res.write(data);
        res.end();*/
        res.end(data); 
    }
     })

});

server.listen(3000,"localhost", () =>
{
    console.log("Listening to requests on port 3000");
});