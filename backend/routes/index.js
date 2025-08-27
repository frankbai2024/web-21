const express = require("express");
const userProfilesRouter = require("./userProfiles");
const userPostsRouter = require("./userPosts");

const router = express.Router();

router.use("/userProfiles", userProfilesRouter);
router.use("/userPosts", userPostsRouter);

module.exports = router;
