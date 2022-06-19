import type { NextApiRequest, NextApiResponse } from "next";
import getAuthors from "../../utils/getAuthors";

export type AuthorsResponseBody = {
  _id: string;
  name: string;
}[];

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<AuthorsResponseBody>
) {
  const result = await getAuthors();

  res.status(200).json(result);
}
