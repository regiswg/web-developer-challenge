import Post from "@/types/Post";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const PostService = {
  async createOne(data: Post) {
    return await api
      .post<Post>("/api/posts", { postData: data })
      .then((res) => res.data)
      .catch((err: any) => {
        console.log(err);
      });
  },
  async deleteOne(postId: string) {
    return await api
      .delete("/api/posts", {
        params: {
          postId,
        },
      })
      .then((res) => res.data);
  },
  async gelAll() {
    return await api
      .get<Post[]>("/api/posts", { data: { postId: "ashdkajshdkjhas" } })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
  },
  async getOne(postId: string) {
    return await api
      .get<Post>("/api/posts", { params: postId })
      .then((res) => res.data);
  },
};

export default PostService;
