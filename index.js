const express = require("express");
const app = express();
const port = process.env.PORT || 3400;

let item1 = false;
let item2 = false;
let item3 = false;

let rm1 = false;
let rm2 = false;
let rm3 = false;
let rm4 = false;
let rm5 = false;
let rm6 = false;
let rm7 = false;
let rm8 = false;
let rm9 = false;
let rm10 = false;
let rm11 = false;
let rm12 = false;
let rm13 = false;
let rm14 = false;
let rm15 = false;

app.set("view engine", "ejs");
app.use('/public', express.static('public'))

app.get("/", (req, res) => {
    res.render("home");
})

app.get("/map", (req, res) => {
    res.render("map",{rm1, rm2, rm3, rm4, rm5, rm6, rm7, rm8, rm9, rm10, rm11, rm12, rm13, rm14, rm15});
})

/* app.get("/room/15", (req, res) => {
    res.render("15", {item1, item2, item3});
    rm15 = true;
})

app.get("/room/1", (req, res) => {
    res.render("1", {item1});
    rm1 = true;
})

app.get("/room/3", (req, res) => {
    res.render("3", {item2});
    rm3 = true;
})

app.get("/room/13", (req, res) => {
    res.render("13", {item3});
    rm13 = true;
}) */

app.get("/room/:id", (req, res) => {
    const id = req.params['id'];

    switch (id) {
        case "1":
            rm1 = true;
            res.render(id, {item1});
            break;
        case "2":
            rm2 = true;
            res.render(id);
            break;
        case "3":
            rm3 = true;
            res.render(id, {item2});
            break;
        case "4":
            rm4 = true;
            res.render(id);
            break;
        case "5":
            rm5 = true;
            res.render(id);
            break;
        case "6":
            rm6 = true;
            res.render(id);
            break;
        case "7":
            rm7 = true;
            res.render(id);
            break;
        case "8":
            rm8 = true;
            res.render(id);
            break;
        case "9":
            rm9 = true;
            res.render(id);
            break;
        case "10":
            rm10 = true;
            res.render(id);
            break;
        case "11":
            rm11 = true;
            res.render(id);
            break;
        case "12":
            rm12 = true;
            res.render(id);
            break;
        case "13":
            rm13 = true;
            res.render(id, {item3});
            break;
        case "14":
            rm14 = true;
            res.render(id);
            break;
        case "15":
            rm15 = true;
            res.render(id, {item1, item2, item3});
            break;
    }
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