import { useState, useContext } from "react";
import { blogContext } from "./Blog";
export default function AddPost() {
  const { handleAddNewPost } = useContext(blogContext);
  const [text, setText] = useState("");

  return (
    <form className="addForm">
      <textarea
        className="Input"
        type="text"
        placeholder="Enter new post"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="addButton"
        onClick={(e) => {
          e.preventDefault();
          setText("");
          handleAddNewPost(text);
        }}
      >
        send
      </button>
    </form>
  );
}
