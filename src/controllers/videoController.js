let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
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

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1]; //배열의 시작은 0부터이기 때문.
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  // 얘 자체로는 우리의 express 앱이 form의 body을 이해 못한다. 따라서 server.js에 앱이 이해할 수 있도록 해주는 express의 method, urlencoded를 추가해줘야한다.
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
  // res.redirect는 브라우저가 라디이렉트(자동으로 이동)하게 하는 것이다 브라우저는 우리가 준 그 url로 리다이렉트할거다
};
