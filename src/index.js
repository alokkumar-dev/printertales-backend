const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

const BlogController = require("./controller/blog.controller");

app.use(cors());
app.use(express.json());
app.use("/blog", BlogController);

const Connect = require("./connect/db.connect");

app.listen(port, async () => {
  try {
    await Connect();
    console.log(`listening on port ${port}`);
  } catch (error) {
    console.log(error.message);
  }
});
