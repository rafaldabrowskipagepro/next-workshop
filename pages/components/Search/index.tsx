import React from "react";
import { useSearchQuery } from "../../../hooks/useSearchQuery";

const Search = () => {
  const [value, onChange] = useSearchQuery();

  return <input {...{ value, onChange }} placeholder="search..." />;
};

export default Search;
