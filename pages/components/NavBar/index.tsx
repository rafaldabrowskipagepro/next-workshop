import React from "react";
import BackButton from "../BackButton";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Search = dynamic(() => import("../Search"));

const NavBar: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <nav
      style={{
        position: "sticky",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        top: 0,
        left: 0,
        right: 0,
        height: 80,
        padding: "0 40px",
        background: "#F4F5FF",
      }}
    >
      {pathname === "/[slug]" && <BackButton />}

      {pathname === "/" && <Search />}
    </nav>
  );
};

export default NavBar;
