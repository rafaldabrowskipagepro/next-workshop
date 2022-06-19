import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { ParsedUrlQuery } from "querystring";
import getPost from "../apollo/operations/postDetailsQuery";
import { useRouter } from "next/dist/client/router";

interface PostPageParams extends ParsedUrlQuery {
  slug: string;
}

interface PostPageProps {
  post: {
    _id: string;
    title: string;
    body: string;
    author: {
      _id: string;
      name: string;
    };
  };
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h1>THIS IS A FALLBACK</h1>;
  }

  const { title, body, author } = post ?? {};
  const { name } = author ?? {};

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <h1>{title}</h1>
      {name && <h2>Created by - {name}</h2>}

      <p>{body}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<PostPageParams> = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PostPageProps, PostPageParams> =
  async ({ params }) => {
    const { slug } = params ?? {};

    if (!slug) {
      return {
        notFound: true,
      };
    }

    console.time(slug);

    const post = await getPost(slug);

    if (!post) {
      return {
        notFound: true,
      };
    }

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(null);
      }, 10000)
    );

    console.timeEnd(slug);

    return {
      props: {
        post,
      },
      revalidate: 1,
    };
  };

export default PostPage;
