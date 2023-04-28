import React, { useRef } from "react";
import Button from "../Button";

function ImperativeHandler() {
  const buttonRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        button from parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandler;
