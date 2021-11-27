// export const trending = (req, res) =>
//   res.send(
//     "<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Home</h1><footer>&copy;2021 Wetube -  All rights reserved</footer></body></html>"
//   );
// 저딴 방식으로 html을 리턴할 수는 없다.
//따라서 간편하게 뷰 엔진의 일종인 pug를 사용해 파일을 pug로 보내서 pug가 이를 html 형식으로 변환해 이곳으로 가져오도록 하자.

export const trending = (req, res) => res.render("home"); //view의 이름을 넣어주는데 여기선 home.pug니까 home을 넣어준다.
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
//export default는 한 파일에 하나 밖에 없는 데다, 하나의 함수만을 export 할 수 있다.
//따라서 export const로 직접 바로 하나씩 export 해주는 것. 이 경우 하나만 있는 default와는 다르기에 import시 이름을 바꾸면 못알아 먹는다.
