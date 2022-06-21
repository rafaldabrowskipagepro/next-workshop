import gql from "graphql-tag";
import { apolloClient } from "..";

interface AuthorsListQuery {
  allAuthor: {
    _id: string;
    name: string;
  }[];
}

const query = gql`
  query GetAuthorsList {
    allAuthor {
      _id
      name
    }
  }
`;

const getAuthorsList = async (): Promise<AuthorsListQuery> => {
  const { data } = await apolloClient.query({
    query,
  });

  return data;
};

export default getAuthorsList;
