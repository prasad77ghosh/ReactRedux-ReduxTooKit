import React, { useState } from "react";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./blogSlice";
import { selectAllUser } from "../users/userSlice";
const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(selectAllUser);

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const handleAuthorChange = (e) => {
    e.preventDefault();
    setUserId(e.target.value);
  };


  const onSavePost = () => {
    if (title && content) {
      dispatch(addPost(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canCreate = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

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
          <label htmlFor="User">Select User: </label>
          <select
            name="postAuther"
            id="postAuther"
            value={userId}
            onChange={handleAuthorChange}
          >
            <option value=""></option>
            {userOptions}
          </select>
          <label htmlFor="body">Content: </label>
          <textarea
            name="postContent"
            id="postContent"
            value={content}
            onChange={handleContentChange}
          ></textarea>
          <button type="button" onClick={onSavePost} disabled={!canCreate}>
            Save Post
          </button>
        </form>
      </div>
    </>
  );
};

export default PostForm;
