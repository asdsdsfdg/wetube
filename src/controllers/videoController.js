export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send("Edit");
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
//export default는 한 파일에 하나 밖에 없는 데다, 하나의 함수만을 export 할 수 있다.
//따라서 export const로 직접 바로 하나씩 export 해주는 것. 이 경우 하나만 있는 default와는 다르기에 import시 이름을 바꾸면 못알아 먹는다.
