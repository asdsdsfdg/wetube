import express from "express";

const PORT = 4000;

const app = express(); //어플리케이션을 만듬

//이곳에서 어플리케이션을 설정한다.
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
const handleHome = (req, res) => {
  return res.send("I love middlewares");
};
// app.use(logger) 그어떤 url에도 작동하는 미들웨어를 만들어줌. app.get위에 두지 않으면 초기 라우터엔 작동안하니 유의
app.get("/", logger, handleHome);

//이곳에서 어플리케이션을 설정한다.

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening); //외부로부터 request받았을 때 서버가 listen 해야함.
