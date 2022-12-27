import React from 'react'
import {useDispatch} from "react-redux"
import { addReactions } from './blogSlice';
import "./ReactionBtn.css"

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionBtn = ({post}) => {
  const dispatch = useDispatch();
  const reactionBtns = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reaction_btn"
        onClick={() => {dispatch(addReactions({ postId: post.id, reaction: name }))}}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  })
  return (
    <>
      <div className='rct_btn'>{reactionBtns}</div>
    </>
  );
}

export default ReactionBtn
