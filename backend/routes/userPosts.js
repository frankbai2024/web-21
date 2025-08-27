const express = require("express");
const {
  getUserPosts,
  getUserPostById,
  addUserPost,
  deleteUserPostById,
  updateUserPost,
} = require("../controllers/userPostsController");
const userPostsRouter = express.Router();

//get all user posts /api/userPosts
userPostsRouter.get("/", getUserPosts);
//get a user post by id /api/userPosts/:post_id
userPostsRouter.get("/:post_id", getUserPostById);
//post a user post /api/userPosts
userPostsRouter.post("/", addUserPost);
//put update a user post by id /api/userPosts/:post_id
userPostsRouter.delete("/:post_id", deleteUserPostById);
//delete a user post by id /api/userPosts/:post_id
userPostsRouter.put("/:post_id", updateUserPost);
module.exports = userPostsRouter;
