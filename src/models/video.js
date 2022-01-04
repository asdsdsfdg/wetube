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

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

//static을 사용하는 이유는 video.creat video.findbyidandupdate 같은 함수를 만들어 코드를 중복시키지 않고 유용하게 쓰기 위해서다
//즉 static은 몽구스 오브젝트를 위한 함수를 만드는 하나의 방법이다.
//물론 별도로 function formatHashtags() {}을 만든 뒤 이 함수를 export function 하여 쓸 수 있지만 이럴 경우 매번 import를 따로 해줘야 하는 번거로움이 있다.
//하지만 static 함수를 만들어두면 이미 이건 Video에 포함되어 있기 때문에 export default 되어 있다면 따로 export 할 필요 없고 import 할 필요도 없다.
//여기서 pre save() 미들웨어를 쓰지 못하게 된 이유 : https://mongoosejs.com/docs/middleware.html#notes
//링크를 보면 Pre and post save() hooks are not executed on update(), findOneAndUpdate() 라고되어 있다 즉 우리가 쓰는  findByIdAndUpdate는 findOneAndUpdate()를 호출하는데 이놈은 'update' 만 가능할 뿐 'save'는 불가능하다.
// 또한 findOneAndUpdate는 업데이트된 문서에 액새스할 수가없다.
const Video = mongoose.model("Video", videoSchema);
export default Video;
