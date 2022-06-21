import { useMemo } from "react";
import { Post } from "../types";
import { useSearchQuery } from "./useSearchQuery";

export const useFilteredPosts = (posts: Post[]) => {
  const [query] = useSearchQuery();

  return useMemo(() => {
    if (!query) {
      return posts;
    }

    return posts.filter(({ title }) =>
      title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
  }, [posts, query]);
};
