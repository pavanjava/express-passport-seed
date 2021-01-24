const routes = require("express").Router();

routes.get("/login", (req, res) => {
    res.render("login");
});

routes.get("/logout", (req, res) => {
    res.send("logging out");
});

routes.get("/google", (req, res) => {
    res.send("logging in with google");
});

module.exports = routes;