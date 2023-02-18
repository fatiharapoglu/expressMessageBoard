const express = require("express");
const path = require("path");

const indexRouter = require("./routes/index");
const newMsgRouter = require("./routes/form");

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/new", newMsgRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

module.exports = app;
