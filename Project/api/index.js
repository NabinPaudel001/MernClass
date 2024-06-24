const express = require("express");
const { config } = require("dotenv");
const mongoose = require("mongoose");
const { Article, User } = require("./models");
config();

const app = express();
const port = process.env.API_PORT;
const dburl = process.env.MONGO_DB;
app.use(express.json());
app.use(express.urlencoded());

app.listen(port, async () => {
  console.log(`Server Started at https://localhost:${port}`);
  console.log("Press Ctrl + C to terminate");
  await mongoose.connect(dburl);
  console.log("MongoDB Connected");
  const userList = await User.find();
  console.log("Users", userList);
  const articleList = await Article.find();
  console.log("Article", articleList);
});
