import { useState, useContext } from "react";
import { blogContext } from "./Blog";
export default function PostList() {
  const { myposts } = useContext(blogContext);

  return (
    <>
      <ul className="postList-ul">
        {myposts.map((post) => {
          return (
            <li key={post.id} className="postlist-li">
              <Post post={post} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

function Post({ post }) {
  const { handleEditPost, handleDeletePost } = useContext(blogContext);

  const [isEditing, setIsEditing] = useState(false);

  let postContent;
  if (isEditing) {
    postContent = (
      <div className="post-1">
        <input
          className="Input"
          type="text"
          value={post.post}
          onChange={(e) => {
            handleEditPost({
              ...post,
              post: e.target.value,
            });
          }}
        />
        <button className="saveButton" onClick={() => setIsEditing(false)}>
          Save
        </button>
      </div>
    );
  } else {
    postContent = (
      <>
        <p>{post.post}</p>
        <h6>
          <span>Posted time: </span>
          {post.datetime}
        </h6>
        <button className="editButton" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <>
      {postContent}
      <button
        className="deleteButton"
        onClick={() => handleDeletePost(post.id)}
      >
        Delete
      </button>
    </>
  );
}
