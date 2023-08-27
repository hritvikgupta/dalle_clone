import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name: { type: String, required: true },
    prompt: { type: String, required: true },  // note the lowercase 'p'
    photo: { type: String, required: true }   // note the lowercase 'p'
});

const Post = mongoose.model("Post", postSchema);

export default Post;
