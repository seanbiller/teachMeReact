import React from "react";
import MiniBlogArticle from "./MiniBlogArticle";
import MiniBlogTitle from "./MiniBlogTitle";

const MiniBlog = () => {
  return (
    <div>
      <MiniBlogTitle />
      <MiniBlogArticle />
    </div>
  );
};

export default MiniBlog;

export const MiniBlogCode = `
import React from "react";
import MiniBlogArticle from "./MiniBlogArticle";
import MiniBlogTitle from "./MiniBlogTitle";

const MiniBlog = () => {
  return (
    <div>
      <MiniBlogTitle />
      <MiniBlogArticle />
    </div>
  );
};

export default MiniBlog;
`.trim();
