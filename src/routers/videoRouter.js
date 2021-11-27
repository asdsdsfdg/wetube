import express from "express";

import { see, edit, upload, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter; //js에선 모든 파일이 각각 독립된 모듈이므로 일일히 import 해주는 것과 동시에 export 해줘야 한다.
//default export는 누군가가 이 파일을 통째로 import하게 될 때, 그때 export하게 될 단 하나의 결과를 디폴트로 적용하는 것.
