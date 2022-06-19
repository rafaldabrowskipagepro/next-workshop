import { Field, Form, Formik } from "formik";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { AuthorsResponseBody } from "./api/authors";

interface CreatePostFormData {
  title: string;
  body: string;
  author: string;
}

const CreatePostPage: NextPage = () => {
  const router = useRouter();
  const [authors, setAuthors] = useState<AuthorsResponseBody>([]);

  useEffect(() => {
    (async () => {
      const result = await fetch("/api/authors");
      setAuthors(await result.json());
    })();
  }, []);

  return (
    <Formik<CreatePostFormData>
      onSubmit={async (values) => {
        await fetch("/api/create-post", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });

        router.push("/");
      }}
      initialValues={{
        title: "",
        body: "",
        author: "",
      }}
    >
      {() => (
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" />
          <label htmlFor="body">Body </label>
          <Field id="body" name="body" as="textarea" />
          <label htmlFor="author">Author</label>
          <Field id="author" name="author" as="select">
            <option value={undefined} />
            {authors.map((author) => (
              <option key={author._id} value={author._id}>
                {author.name}
              </option>
            ))}
          </Field>

          <button type="submit">CREATE</button>
        </Form>
      )}
    </Formik>
  );
};

export default CreatePostPage;
