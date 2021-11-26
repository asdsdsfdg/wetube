import express from "express"; //자바스크립트에서 각 js파일들은 독립되어 있기에 일일히 import해줘야 한다.
import morgan from "morgan";

const PORT = 4000;

const app = express(); //어플리케이션을 만듬
const logger = morgan("dev");

//여기서 어플리케이션을 설정한다.
app.use(logger); // app.use()는 그어떤 url에도 use할 수 있는 글로벌미들웨어를 만들어줌. app.get위에 두지 않으면 초기 라우터엔 작동안하니 유의

const globalRouter = express.Router(); //이렇게 하면 라우터를 만들 수 있다 아주 간단함.

const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");

userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");

videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter); //누군가가 "/"로 시작하는 url에 접근한다면. globalRouter라는 라우터(정확히는 라우터 안의 컨트롤러)를 use한다
app.use("/videos", videoRouter);
app.use("/users", userRouter);

//여기까지 어플리케이션을 설정한다.

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening); //외부로부터 request받았을 때 서버가 listen 해야함.
