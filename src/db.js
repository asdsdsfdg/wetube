import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/clonewetube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);

//mongo를 쳐주면 mongodb에 접속할 수 있으며
//그곳에서 show dbs로 존재하는 db들을 본다던지, use (db이름)으로 해당 db로 스위칭하여 show collections(documents들의 묶음) 로 db에 존재하는 docu들을 살핀다던지
//혹은 db.콜렉션이름.find() or remove({})등으로 저장된 obj를 확인하거나 지울 수 있다.
