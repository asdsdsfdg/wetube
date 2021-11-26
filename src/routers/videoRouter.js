import express from "express";

import { watch, edit } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit);

export default videoRouter; //js에선 모든 파일이 각각 독립된 모듈이므로 일일히 import 해주는 것과 동시에 export 해줘야 한다.
