require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");

const auth = require("./routers/Auth");
const user = require("./routers/User");
const blog = require("./routers/Blog");

const blogcontroller = require("./controllers/blogcontroller");

const middlewares = require("./middleware");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({
    message: "Hello, Server is up in running!!",
    homepage: `http://localhost:${port}/home`,
    docs: `http://localhost:${port}/docs`,
    sucess: true,
  });
});

app.get("/home", blogcontroller.handle_get_blogs);

app.use("/auth", auth);
app.use("/user", middlewares.requireLoggedIn, user);
app.use("/blog", middlewares.requireLoggedIn, blog);

app.get("/:whatever", (req, res) => {
  res.render("notfound404", { url: req.url });
});

app.listen(port, () => console.log(`server is running on port ${port}`));
