import Video from "../models/Video";

/*
console.log("start")
Video.find({}, (error, videos) => {
  if(error){
    return res.render("server-error")
  }
  return res.render("home", { pageTitle: "Home", videos });
});
console.log("finished")
*/

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = async (req, res) => {
  const { id } = req.params; //req.param은 라우터가 주는 express의 기능
  const video = await Video.findById(id); // mixin/video.pug에서 비디오의 제목을 누르면 /videos/() 즉 각 비디오 페이지url 괄호 안을 edit된 video에 부여된 id값이 넣어진 url로 이동하게 함
  //이동된 url은 videoRouter에서 정의된 그 /video/:id의 형식이므로 라우터가 이를 인식, :id의 값이 req.parm에게 변수로서 전송되고 watch 컨트롤러 펑션을 발동시킴
  //그럼 함수는 req.parm으로부터 그 id변수를 다시 받아 해당 id를 가진 video를 find해 이를 watch 템플릿에 보내줌
  return res.render("watch", { pageTitle: video.title, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
