const axios = require("axios");
const USER_POST_API_URL = "http://localhost:8000/userPosts";

const getUserPosts = async function (req, res, next) {
  console.log("test");
  try {
    const response = await axios.get(USER_POST_API_URL);
    const userPosts = response.data;
    res.status(200).json({
      msg: "get user posts",
      data: userPosts,
    });
  } catch (error) {
    next(error);
  }
};

const getUserPostById = async function (req, res, next) {
  const id = req.params.post_id;
  if (!id) {
    return res.status(400).send("post id is required");
  }
  try {
    const response = await axios.get(`${USER_POST_API_URL}/${id}`);
    const userPost = response.data;
    res.status(200).json({
      msg: "get user post",
      data: userPost,
    });
  } catch (error) {
    next(error);
  }
};

const addUserPost = async function (req, res, next) {
  const newUserPost = req.body;
  if (!newUserPost || Object.keys(newUserPost).length === 0) {
    //console.log(parseInt(Object.keys(newUserPost).length));
    return res.status(400).send("user post is required");
  }
  try {
    await axios.post(USER_POST_API_URL, newUserPost, {
      headers: { "Content-Type": "application/json" },
    });
    res.status(200).json({
      msg: "user post is created",
    });
  } catch (error) {
    next(error);
  }
};

/*const deleteUserPostById = async function (req, res, next) {
  const id = req.params.post_id;
  console.log("id:", id);
  if (!id) {
    return res.status(400).send("post id is required");
  }
  try {
    await axios.delete(`${USER_POST_API_URL}/${id}`);
  } catch (error) {
    next(error);
  }
};
*/

const deleteUserPostById = async function (req, res, next) {
  const id = req.params.post_id;

  if (!id) {
    return res.status(400).send("Id is required");
  }

  try {
    await axios.delete(`${USER_POST_API_URL}/${id}`);

    res.status(200).json({
      msg: "User post is deleted",
    });
  } catch (error) {
    next(error);
  }
};

const updateUserPost = async function (req, res, next) {
  const id = req.params.post_id;
  if (!id) {
    return res.status(400).send("post id is required");
  }
  const updateUserPost = req.body;
  try {
    await axios.put(`${USER_POST_API_URL}/${id}`, updateUserPost, {
      headers: { "Content-Type": "application/json" },
    });
    res.status(200).json({
      msg: "user post is updated",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUserPosts,
  getUserPostById,
  addUserPost,
  deleteUserPostById,
  updateUserPost,
};
