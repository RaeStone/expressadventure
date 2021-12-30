const express = require("express");
const app = express();
const port = process.env.PORT || 3400;

let item1 = false;
let item2 = false;
let item3 = false;

app.set("view engine", "ejs");
app.use('/public', express.static('public'))

app.get("/", (req, res) => {
    res.send("hello");
    //res.render("home");
})

app.get("/room/15", (req, res) => {
    res.render("15", {item1, item2, item3});
})

app.get("/room/:id", (req, res) => {
    const id = req.params['id'];
    res.render(id);
})

app.get("/tada", (req, res) => {
    res.render("escape");
})
app.get("/item/:name", (req, res) => {
    const name = req.params['name'];
    if (name == 'key'){
        item1 = true;
        res.render('item1');
    }
    else if (name == 'crystal'){
        item2 = true;
        res.render('item2');
    }
    else if (name == 'coin'){
        item3 = true;
        res.render('item3');
    }
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})