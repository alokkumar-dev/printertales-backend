const express = require("express");
const router = express.Router();

const Blog = require("../model/blog.model");

router.post("", async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    return res.status(200).send(blog);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("", async (req, res) => {
  try {
    const limitValue = req.query.limit;
    const pageValue = req.query.page;
    const blog = await Blog.find().limit(limitValue).skip(pageValue); // with pagination
    return res.status(200).send(blog);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// route for search by title..

router.get("/search/:title", async (req, res) => {
  try {
    const blog = await Blog.find({
      $or: [{ title: { $regex: req.params.title } }],
    });

    return res.send(blog);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).lean().exec();
    return res.status(200).send(blog);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(blog);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
