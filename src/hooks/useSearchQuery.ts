import React, { useCallback } from "react";
import { useQueryParam, StringParam } from "next-query-params";

export const useSearchQuery = () => {
  const [query, setQuery] = useQueryParam("q", StringParam);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: { value } }) => setQuery(value || undefined),
    [setQuery]
  );

  return [query ?? "", onChange] as const;
};
