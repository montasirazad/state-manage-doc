/* eslint-disable react/prop-types */
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={handleChangeText}
      />
      <button
        onClick={() => {
          onAdd(text);
          setText("");
        }}
      >
        ADD
      </button>
    </>
  );
};

export default AddTask;
