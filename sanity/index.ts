import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "jtrwu7rp",
  dataset: "production",
  apiVersion: new Date().toISOString().substr(0, 10),
  useCdn: false,
  token:
    "skYe8Y812p1OHU4aFKVbcxAZLe9TfYDacCwh8G7OIb5cO0OfhesFZwY5mM4Go5qBeVXutlzJa9V1wUnnIlSLjEDSDnZmLSWSHAux610jPtIQ5kfuRObqb7EhIVf76wctTxFLXJEejZSM079wF5Z9KjuOjqX0gJFFH7z9H3y4FuXpRid0kSfS",
});
