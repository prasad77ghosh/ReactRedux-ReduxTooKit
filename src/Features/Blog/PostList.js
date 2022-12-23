import React from "react";
import "./PostList.css";
import { useSelector } from "react-redux";
import Article from "./Article";
import { selsectAllPost } from "./blogSlice";
import PostForm from "./PostForm";

const PostList = () => {
  const posts = useSelector(selsectAllPost);
  return (
    <>
      <div className="postlist_cont">
        <PostForm />
        <h1>Posts</h1>
        {posts && posts.map((post) => <Article key={post.id} post={post} />)}
      </div>
    </>
  );
};

export default PostList;
