import React, { useCallback, useState } from "react";
import Child from "../Child";

function CallbackTutorial() {
  const [data, setData] = useState("useCallback tutorial");
  const [toggle, setToggle] = useState(false);

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );
  return (
    <div>
      <Child returnComment={returnComment} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {""} toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </div>
  );
}

export default CallbackTutorial;
