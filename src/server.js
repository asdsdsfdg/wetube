// const express = require("express");
//이렇게 express를 실행할 수는 있음
//하지만 babel에 도움을 받아 보다 최신 문법을 이용가능 아래처럼
import express from "express";
//npm run dev으로 코드를 터미널에서 실행할 수 있다.
//다만 수정할 때마다 일일히 npm run dev를 쳐줘야 하는 단점이 있음
//nodemon을 사용하면 한번만 써도 자동으로 재실행해줌

const PORT = 4000;

const app = express();

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
