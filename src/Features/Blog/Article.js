import React from "react";
import "./Article.css";
import PostAuther from "./PostAuther";
import TimeAgo from "./TimeAgo";
import ReactionBtn from "./ReactionBtn";

const Article = ({ post }) => {
  return (
    <>
      <div className="post_cont">
        <h1>{post.title}</h1>
        <p>{post.content.substring(0, 100)}</p>
        <p>
          <PostAuther userId={post.userId} />
          <TimeAgo timeStamp={post.date} />
        </p>
        <ReactionBtn post = {post}/>
      </div>
    </>
  );
};

export default Article;
