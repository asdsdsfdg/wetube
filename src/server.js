import express from "express"; //자바스크립트에서 각 js파일들은 독립된 모듈이기에 일일히 import해줘야 한다.
import morgan from "morgan";

import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express(); //어플리케이션을 만듬
const logger = morgan("dev");

//여기까지 어플리케이션을 설정한다.

app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

//여기까지 어플리케이션을 설정한다.

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening); //외부로부터 request받았을 때 서버가 listen 해야함.
