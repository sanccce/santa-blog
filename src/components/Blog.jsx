import { useState, createContext } from "react";
import { posts } from "./Data";
import AddPost from "./AddPost";
import PostList from "./PostList";

let postId = 3;
export const blogContext = createContext();

export default function Blog() {
  const [myposts, setMyPosts] = useState(
    JSON.parse(localStorage.getItem("postData"))
  );

  //add new post
  function handleAddNewPost(text) {
    if (!text) return;
    const newPost = {
      id: postId++,
      post: text,
      datetime: new Date().toLocaleString(),
    };
    const listPost = [...myposts, newPost].reverse();

    setMyPosts(listPost);
    // setMyPosts([
    //   ...myposts,
    //   postNew,
    //     { id: postId++, post: text, datetime: new Date().toLocaleString() },
    // ]);
    localStorage.setItem("postData", JSON.stringify(listPost));
    //localStorage.clear("mypost");
  }

  //function to edit post
  function handleEditPost(post) {
    setMyPosts(
      myposts.map((item) => {
        if (item.id === post.id) {
          return post;
        } else {
          return item;
        }
      })
    );
  }

  // function to delete post
  function handleDeletePost(id) {
    const filteredPost = myposts.filter((post) => post.id !== id);
    setMyPosts(filteredPost);
  }

  return (
    <>
      <blogContext.Provider
        value={{ myposts, handleAddNewPost, handleEditPost, handleDeletePost }}
      >
        <AddPost />
        <PostList />
      </blogContext.Provider>
    </>
  );
}
