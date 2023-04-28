import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef(function Button(props, ref) {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <button>button from child</button>
      {toggle && <span>toggle</span>}
    </>
  );
});
export default Button;
