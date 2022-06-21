import sanityClient from "../sanity";

interface AuthorModel {
  _id: string;
  name: string;
}

const getAuthors = () =>
  sanityClient.fetch<AuthorModel[]>(`*[_type == "author"] `);

export default getAuthors;
