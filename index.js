const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const auth = require("./routers/Auth");

// require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.json());
app.use(cookieParser());

app.get("/api/info", (req, res) => {
  res.json({
    message: "Welcome to the Blogging Rest API!!",
    docs: "/api/docs",
    success: true,
  });
});

app.use("/api/auth", auth);
app.use(express.static("public"));

app.listen(port, () => console.log(`server is running on port ${port}`));
