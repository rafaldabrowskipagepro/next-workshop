import { useRouter } from "next/dist/client/router";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  return <button onClick={() => router.push("/")}>Back to the list</button>;
};

export default BackButton;
