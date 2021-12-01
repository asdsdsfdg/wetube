import express from "express";
import morgan from "morgan";

import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");

app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true })); // 라우터를 사용하기 전에 해당 미들웨어를 사용해야한다. 미들웨어가 폼의 value들을 이해하고 그걸 js로 변형하여 라우터에서 사용할 수 있게 해줘야 하기 때문
// extended 옵션은 폼의 바디에 있는 정보를 보기 좋게 형식을 갖춰주는 일을 함.
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
