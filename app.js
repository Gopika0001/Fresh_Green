const express= require("express");
const app = express();

app.set("view engine","ejs");

app.listen(3000);

app.get("/", (req, res) =>
{
    const suppliers = [
        {Supname: "John", Description: "Our cart sells ghjhjjhjhjhhgh"},
        {Supname: "george", Description: "Our cart sells ghjhjjhjhjhhgh"},
        {Supname: "mike", Description: "Our cart sells ghjhjjhjhjhhgh"}
    ];
    res.render("index", { title: "Home", suppliers });
});
app.get("/about", (req, res) =>
{
    res.render("about",{ title: "About"});
});

app.get("/create", (req,res) =>{
    res.render("create", { title: "Accounts" });
})

app.use((req, res) =>
{
    res.status(404).render("404", { title: "error"});
});
