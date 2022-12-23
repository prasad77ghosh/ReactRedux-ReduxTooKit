import React from "react";
import "./Article.css";

const Article = ({ post }) => {
  return (
    <>
      <div className="post_cont">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </>
  );
};

export default Article;
