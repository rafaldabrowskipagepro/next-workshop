import type { NextApiRequest, NextApiResponse } from "next";
import createPost from "../../utils/createPost";

export interface CreatePostRequestBody {
  title: string;
  body: string;
  author: string;
}

interface CreatePostResponseBody {
  title: string;
  body: string;
  slug: {
    _type: string;
    current: string;
  };
  author: {
    _ref: string;
    _type: string;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreatePostResponseBody>
) {
  const result = await createPost({ ...req.body });

  res.status(200).json(result);
}
