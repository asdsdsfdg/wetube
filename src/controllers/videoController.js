//5.7

//literation은 기본적으로 원소들의 list를 보여주는 것이다. 코멘드들의 list, 비디오들의 list등등
//literation엔 리스트, 즉 array 또는 object가 필요하다.
export const trending = (req, res) => {
  const videos = [
    {
      title: "Hello",
    },
    {
      title: "Video #2",
    },
    {
      title: "Whatsup",
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser });
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
