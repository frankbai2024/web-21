const handleErrors = function (err, req, res, next) {
  console.log("err", err);
  const statusCode = err.status || 500;
  const message = err.message || "internal server error";
  res.status(statusCode).json(message);
};

module.exports = { handleErrors };
