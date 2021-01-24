const express = require("express");
const authRoutes = require("./routes/auth.routes");

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home")
})

app.use("/auth", authRoutes);

app.listen(3000, () => {
   console.log(`app listening on port 3000`);
});