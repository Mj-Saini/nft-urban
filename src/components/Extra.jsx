import React, { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  const inputData = (e) => {
    e.preventDefault();
    console.log(input);
    alert(input);
  };
  return (
    <>
      <div className="">
        <form onSubmit={inputData}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default Input;
