import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 80 },
  description: { type: String, required: true, trim: true, minLength: 20 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

videoSchema.pre("save", async function () {
  //pre는 previous, 이전을 의미하는 미들웨어. 즉 'save'하기 이전에 인터셉터하는 미들웨어다.]
  //this는 현재 저장하고자 하는 문서를 가리킨다
  //처음 그냥 string으로 hashtags를 저장하면 ['a, b, c, d']같이 'a, b, c, d'가 하나의 첫번째 요소(hashtags[0])인 배열로 저장돤다.
  //이 hashtags[0]만 있는 hasgtags 배열을 db에 저장하기 전에 미들웨어가 끼어들어 hastags[0]을 쉼표를 기준으로 원소를 split해 ['a','b','c','d'] 이렇게 4개의 요소를 지닌 배열로 db에 바꿔서 넘긴다.
  this.hashtags = this.hashtags[0]
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

//미들웨어는 무조건 model이 생성되기 전에 만들어야 한다.
const Video = mongoose.model("Video", videoSchema);
export default Video;
