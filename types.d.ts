export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author: {
    _id: string;
    name: string;
  };
}

export interface CreatePostRequestBody {
  title: string;
  body: string;
  author: string;
}
