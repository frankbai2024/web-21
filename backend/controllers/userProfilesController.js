const axios = require("axios");
const USER_PROFILES_API_URL = "http://localhost:8000/userProfiles";

const getUserProfiles = async function (req, res, next) {
  //res.send("test getUserProfiles");
  try {
    const response = await axios.get(USER_PROFILES_API_URL);
    const userProfiles = response.data;
    res.status(200).json({
      msg: "get userProfiles successfully",
      data: userProfiles,
    });
  } catch (error) {
    console.error("error:", error);
    next(error);
  }
};

const getUserProfileById = async function (req, res, next) {
  //console.log("getUserProfileById");
  const id = req.params.userId;
  if (!id) {
    return res.status(400).send("user id is required");
  }
  try {
    const response = await axios.get(`${USER_PROFILES_API_URL}/${id}`);
    const userProfile = response.data;
    res.status(200).json({
      msg: "get userProfile succed",
      data: userProfile,
    });
  } catch (error) {
    console.error("error:", error);
    next(error);
  }
};

const patchUserProfileById = async function (req, res, next) {
  const id = req.params.userId;
  if (!id) {
    return res.status(400).send("user id is required");
  }
  const newUserProfileData = req.body;

  try {
    const response = await axios.patch(
      `${USER_PROFILES_API_URL}/${id}`,
      newUserProfileData
    );
    const updateUserProfile = response.data;
    res.status(200).json({
      msg: "update successfully",
      data: updateUserProfile,
    });
  } catch (error) {
    next(error);
  }
  console.log("patchUserProfileById");
};
module.exports = { getUserProfiles, getUserProfileById, patchUserProfileById };
