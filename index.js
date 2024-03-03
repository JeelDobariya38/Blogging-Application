const express = require("express");
const cookieParser = require("cookie-parser");

const auth = require("./routers/Auth");
const user = require("./routers/User");
const blog = require("./routers/Blog");

const middlewares = require("./middleware");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(middlewares.logger)
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());


app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the Blogging Rest API!!",
    docs: "/api/docs",
    success: true,
  });
});

app.use("/api/auth", auth);
app.use("/api/user", user);
app.use("/api/blog", middlewares.requireLoggedIn, blog);

app.listen(port, () => console.log(`server is running on port ${port}`));
