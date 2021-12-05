import "./db";
import "./models/Video";
import app from "./Server";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

//server.js에서는 서버에 관련된 것만. 여기는 파일을 모두 import해야하는 것들을 import하고 여기에 이상이 없다면 app을 실행시키는 역할로 구분
