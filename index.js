// require("dotenv").config();

const express = require("express");
const path = require("path");

const auth = require("./routers/Auth");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.json());

app.get("/api/info", (req, res) => {
  res.json({
    message: "Welcome to the Blogging Rest API!!",
    docs: "/api/docs",
    success: true
  });
});

app.use("/api/auth", auth);
app.use(express.static("public"));

app.listen(port, () => console.log(`server is running on port ${port}`));
