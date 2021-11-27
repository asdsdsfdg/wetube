import express from "express"; //자바스크립트에서 각 js파일들은 독립된 모듈이기에 일일히 import해줘야 한다.
import morgan from "morgan";

import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express(); //어플리케이션을 만듬
const logger = morgan("dev");

//여기까지 어플리케이션을 설정한다.

app.set("view engine", "pug"); //뷰엔진으로 pug를 사용하도록 set한다. express는 항상 view를 현재 디렉토리의 views파일에서 찾는다.
//단 cwd, 즉 현재 작업 중인 디렉토리의 기준은 node를 불러오고 서버를 시작하는 디렉토리고 그 노드는 package.json에서 시작하고 있다.
app.set("views", process.cwd() + "/src/views"); //따라서 디렉토리 기준을 바꿔줄 필요가 있다.
app.use(logger);
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

//여기까지 어플리케이션을 설정한다.

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening); //외부로부터 request받았을 때 서버가 listen 해야함.
