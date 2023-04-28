import React, { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "Hello World";
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        value="Fernando"
        style={{ width: 500, height: 100 }}
      />
    </div>
  );
}

export default LayoutEffectTutorial;
