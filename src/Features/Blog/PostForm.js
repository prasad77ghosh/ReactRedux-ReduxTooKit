import React, { useState } from "react";
import "./Form.css";
import { useDispatch } from "react-redux";
import { addPost } from "./blogSlice";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const onSavePost = () => {
    if (title && content) {
      dispatch(addPost(title, content));
      setTitle("");
      setContent("");
    }
  };

  return (
    <>
      <div className="form_cont">
        <h1>Add a New Post</h1>
        <form>
          <label htmlFor="postTitle">Post Title: </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={handleTitleChange}
          />
          <label htmlFor="body">Content: </label>
          <textarea
            name="postContent"
            id="postContent"
            value={content}
            onChange={handleContentChange}
          ></textarea>
          <button type="button" onClick={onSavePost}>
            Save Post
          </button>
        </form>
      </div>
    </>
  );
};

export default PostForm;
