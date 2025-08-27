const express = require("express");
const {
  getUserProfiles,
  getUserProfileById,
  patchUserProfileById,
} = require("../controllers/userProfilesController");

const userProfilesRouter = express.Router();

//get user profiles /api/userProfiles/
userProfilesRouter.get("/", getUserProfiles);

//get user profile by id /api/userProfiles/:userid
userProfilesRouter.get("/:userId", getUserProfileById);

//patch update user profile by id /api//userProfiles:userid
userProfilesRouter.patch("/:userId", patchUserProfileById);
module.exports = userProfilesRouter;
