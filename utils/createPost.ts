import { CreatePostRequestBody } from "../pages/api/create-post";
import sanityClient from "../sanity";

interface PostModel {
  title: string;
  body: string;
  author: {
    _ref: string;
    _type: string;
  };
}

const createPost = (post: CreatePostRequestBody) => {
  return sanityClient.create<
    PostModel & {
      slug: {
        _type: "slug";
        current: string;
      };
    }
  >({
    ...post,
    _type: "post",
    author: {
      _ref: post.author,
      _type: "reference",
    },
    slug: {
      _type: "slug",
      current: post.title.toLocaleLowerCase().replace(/ /g, "-"),
    },
  });
};
export default createPost;
