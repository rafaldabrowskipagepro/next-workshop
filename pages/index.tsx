import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import getPostsList from "../apollo/operations/postListsQuery";
import { useFilteredPosts } from "../hooks/useFilteredPosts";

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

interface HomePageProps {
  posts: Post[];
}

const Home: NextPage<HomePageProps> = ({ posts }) => {
  const filteredPosts = useFilteredPosts(posts);

  return (
    <ul>
      {filteredPosts.map((post) => (
        <li key={post._id}>
          <Link href={post.slug.current} prefetch={false}>
            {`${post.title} (created by ${post.author.name})`}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const getServerSideProps: GetServerSideProps<HomePageProps> =
  async () => {
    const { allPost } = await getPostsList();

    return {
      props: {
        posts: allPost,
      },
    };
  };

export default Home;
