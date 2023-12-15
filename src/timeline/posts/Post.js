import React, { useState } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Post({ user, postImage, likes, timestamp }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  // 함수 내에서 이전 상태를 참조하여 업데이트하도록 하여 비동기성으로 인한 문제를 방지
  const handleLikeClick = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
    setLikeCount((prevLikeCount) =>
      isLiked ? prevLikeCount - 1 : prevLikeCount + 1
    );
  };
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          <span className="post__userName">{user}</span> •
          <span className="post__usesrTimestamp">{timestamp}</span>
        </div>
        <MoreHorizIcon className="post__headerIcon" />
      </div>
      <div className="post__image">
        <img src={postImage} alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            {isLiked ? (
              <FavoriteIcon className="postIcon" onClick={handleLikeClick} />
            ) : (
              <FavoriteBorder className="postIcon" onClick={handleLikeClick} />
            )}
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave" onClick={handleBookmarkClick}>
            {isBookmarked ? (
              <BookmarkIcon className="postIcon" />
            ) : (
              <BookmarkBorderIcon className="postIcon" />
            )}
          </div>
        </div>
        Liked by {likeCount} people.
      </div>
    </div>
  );
}

export default Post;
