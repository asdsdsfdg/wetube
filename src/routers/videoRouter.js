import express from "express";

import {
  watch,
  upload,
  deleteVideo,
  getEdit,
  postEdit,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
//어차피 같은 url(route)을 사용하니 이렇게 단축시킬수있다. 하나의 url을 사용할 때 유용하고 실수를 줄인다.

export default videoRouter;
