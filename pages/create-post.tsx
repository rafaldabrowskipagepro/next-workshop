import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import AuthorSelect from "../src/components/AuthorSelect";
import LabeledInput from "../src/components/LabeledInput";
import LabeledTextArea from "../src/components/LabeledTextArea";

const CreatePostPage = () => {
  const router = useRouter();

  return (
    <Formik
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
          <LabeledInput name="title" label="Title" />
          <LabeledTextArea name="body" label="Body" />
          <AuthorSelect name="author" />

          <button type="submit">CREATE</button>
        </Form>
      )}
    </Formik>
  );
};

export default CreatePostPage;
