//5.7

//literation은 기본적으로 원소들의 list를 보여주는 것이다. 코멘드들의 list, 비디오들의 list등등
//literation엔 리스트, 즉 array 또는 object가 필요하다.

let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};

export const see = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1]; //배열의 시작은 0부터이기 때문.
  return res.render("watch", { pageTitle: `Watching ${video.title}` });
};

export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");
