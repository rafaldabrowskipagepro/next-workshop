import gql from "graphql-tag";
import { apolloClient } from "..";

const query = gql`
  query GetPostsList {
    allPost {
      _id
      title
      slug {
        current
      }
      author {
        _id
        name
      }
    }
  }
`;

interface PostListQuery {
  allPost: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
    author: {
      _id: string;
      name: string;
    };
  }[];
}

const getPostsList = async (): Promise<PostListQuery> => {
  const { data } = await apolloClient.query({
    query,
  });

  return data;
};

export default getPostsList;
