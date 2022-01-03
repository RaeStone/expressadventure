const express = require("express");
const app = express();
const port = process.env.PORT || 3400;
const session = require("express-session");

let items = Array(3).fill(false);
let explored = Array(15).fill(false);

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/public', express.static('public'));
app.use(session({
    secret: 'cyprus',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

app.get("/", (req, res) => {
    let user = "";
    if (req.session && req.session.username){
        user = req.session.username;
    }
    res.render("index");
})

app.post("/login", (req, res) => {
    valid_users = [
        {name: "Rae", password: "Rae"},
        {name: "Nmuta", password: "Nmuta"},
        {name: "Cooper", password: "Anime"}
    ]
    const user = req.body.username;
    const pass = req.body.password

    const found_user = valid_users.find(userSearch => {
        return userSearch.name == user && userSearch.password == pass;
    })

    if(found_user) {
        req.session.username = user;
        res.redirect("/start");
    }
    else {
        req.session.destroy(()=>{});
        res.redirect("/");
    }
    req.session.username = user;
})

app.get("/start", (req, res) => {
    if (req.session && req.session.username){
        res.render("home");
    }
    else {
        res.redirect("/");
    }
})

app.get("/map", (req, res) => {
    if (req.session && req.session.username){
        res.render("map", {explored});
    }
    else {
        res.redirect("/");
    }
})

app.get("/reset", (req, res) => {
    if (req.session && req.session.username){
        items.fill(false);
        explored.fill(false);
        res.redirect("/start");
    }
    else {
        res.redirect("/");
    }
})

app.get("/room/:id", (req, res) => {
    const id = req.params['id'];
    var num = parseInt(id);
    explored[num - 1] = true;
    if (id == "1"){
        items[0] = true;
        res.render(id, {items})
        return
    }
    else if (id == "3") {
        items[1] = true;
        res.render(id, {items})
        return
    }
    else if (id == "13") {
        items[2] = true;
        res.render(id, {items})
        return
    }
    else if (id == "15") {
        res.render("15", {items});
        return
    }
    res.render(id);
})

app.get("/tada", (req, res) => {
    explored.fill(false);
    items.fill(false);
    res.render("escape");
})
app.get("/item/:name", (req, res) => {
    const name = req.params['name'];
    if (name == 'key'){
        items[0] = true;
        res.render('item1');
    }
    else if (name == 'crystal'){
        items[1] = true;
        res.render('item2');
    }
    else if (name == 'coin'){
        items[2] = true;
        res.render('item3');
    }
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})