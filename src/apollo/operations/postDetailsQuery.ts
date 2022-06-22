import gql from "graphql-tag";
import { apolloClient } from "..";

interface PostQuery {
  allPost: {
    _id: string;
    title: string;
    body: string;
    author: {
      _id: string;
      name: string;
    };
  }[];
}

interface PostQueryVariables {
  slug: string;
}

const query = gql`
  query GetPost($slug: String!) {
    allPost(where: { slug: { current: { eq: $slug } } }) {
      _id
      title
      slug {
        current
      }
      body
      author {
        _id
        name
      }
    }
  }
`;

const getPost = async (slug: string) => {
  const { data } = await apolloClient.query<PostQuery, PostQueryVariables>({
    query,
    variables: {
      slug: slug.startsWith("/") ? slug : `/${slug}`,
    },
  });

  const {
    allPost: [post],
  } = data;

  return post;
};

export default getPost;
