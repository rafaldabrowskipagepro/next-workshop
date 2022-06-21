import React, { useEffect, useState } from "react";
import { Field } from "formik";
import { AuthorsResponseBody } from "../../../pages/api/authors";

const AuthorSelect: React.VFC<{ name: string }> = ({ name }) => {
  const [authors, setAuthors] = useState<AuthorsResponseBody>([]);

  useEffect(() => {
    (async () => {
      const result = await fetch("/api/authors");
      setAuthors(await result.json());
    })();
  }, []);

  return (
    <>
      <label htmlFor="author">Author</label>

      <Field id="author" {...{ name }} as="select">
        <option value={undefined} />
        {authors.map((author) => (
          <option key={author._id} value={author._id}>
            {author.name}
          </option>
        ))}
      </Field>
    </>
  );
};

export default AuthorSelect;
