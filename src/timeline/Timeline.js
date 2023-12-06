import React, { useState } from "react";
import "./Timeline.css";
import Suggestion from "./suggestions/Suggestion";
import Post from "./posts/Post";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "yerimii_",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      likes: 54,
      timestamp: "30min",
    },
    {
      user: "yeppi_heo",
      postImage:
        "https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_1280.jpg",
      likes: 67,
      timestamp: "12h",
    },
    {
      user: "cookie_koc",
      postImage:
        "https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_1280.jpg",
      likes: 80,
      timestamp: "21h",
    },
    {
      user: "mang_gomi",
      postImage:
        "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg",
      likes: 12,
      timestamp: "2d",
    },
  ]);

  const [suggestions, setSuggestions] = useState([
    {
      suggestionUser: "jino❤️",
      suggestionRelation: "New to Instagram",
    },
    {
      suggestionUser: "barista_R",
      suggestionRelation: "New to Instagram",
    },
    {
      suggestionUser: "apple_ko",
      suggestionRelation: "New to Instagram",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__container">
        <div className="timeline__left">
          <div className="timeline__posts">
            {/* Post 컴포넌트와 구분선을 번갈아가며 렌더링합니다. */}
            {posts.map((post, index) => (
              <React.Fragment key={index}>
                <Post
                  user={post.user}
                  postImage={post.postImage}
                  likes={post.likes}
                  timestamp={post.timestamp}
                />
                {index < posts.length - 1 && <hr className="postSeparator" />}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="timeline__right">
          <div className="suggestion__title">Suggestions for you</div>
          {suggestions.map((suggestion) => (
            <Suggestion
              suggestionUser={suggestion.suggestionUser}
              suggestionRelation={suggestion.suggestionRelation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
