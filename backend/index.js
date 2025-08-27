//npm init
//npm i express json-server cors axios
//npm i nodemon concurrently -D
//npx nodemon http://localhost:80
//npm run json:server
//npm run dev
//netstat -ano | findstr :8000

const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const { handleErrors } = require("./middleware/errorMiddleware");
const app = express();
//先加载cors解决同源问题
app.use(cors());

//要先解释传进来的数据
app.use(express.json());

app.use("/api", router);
//API先执行，再执行ERROR的MIDDLEWARE
//use error middleware at the end
app.use(handleErrors);

const PORT = 80;
app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});

//git add .
//git commit -m 'create TopSocial'
//git status
//git log --oneline
//git remote add origin https://github.com/frankbai2024/TopSocial.git
//git remote -v
//git push
