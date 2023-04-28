import React, { useRef } from "react";

function RefTutorial() {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>Fernando</h1>
      <input type="text" placeholder="ex..." ref={inputRef} />
      <button onClick={onClick}>mudar o nome</button>
    </div>
  );
}

export default RefTutorial;
