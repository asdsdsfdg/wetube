import "./db";
import "./models/Video";
import app from "./Server";

const PORT = 4000;

const handleListening = () =>
  console.log(`โ Server listenting on http://localhost:${PORT} ๐`);

app.listen(PORT, handleListening);

//server.js์์๋ ์๋ฒ์ ๊ด๋ จ๋ ๊ฒ๋ง. ์ฌ๊ธฐ๋ ํ์ผ์ ๋ชจ๋ importํด์ผํ๋ ๊ฒ๋ค์ importํ๊ณ  ์ฌ๊ธฐ์ ์ด์์ด ์๋ค๋ฉด app์ ์คํ์ํค๋ ์ญํ ๋ก ๊ตฌ๋ถ
