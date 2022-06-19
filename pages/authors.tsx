import { GetStaticProps, NextPage } from "next";
import React from "react";
import getAuthorsList from "../apollo/operations/authorListQuery";

interface AuthorsListPageProps {
  authors: {
    _id: string;
    name: string;
  }[];
}

const AuthorListPage: NextPage<AuthorsListPageProps> = ({ authors }) => {
  return (
    <ul>
      {authors.map((author) => (
        <li key={author._id}>{author.name}</li>
      ))}
    </ul>
  );
};

export const getStaticProps: GetStaticProps<AuthorsListPageProps> =
  async () => {
    const { allAuthor } = await getAuthorsList();

    return {
      props: {
        authors: allAuthor,
      },
    };
  };

export default AuthorListPage;
