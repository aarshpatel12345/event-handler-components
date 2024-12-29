import React from "react";

function ButtonClickHandler() {
  const [click, setClick] = React.useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <button onClick={handleClick} style={click ? { background: "red" } : {}}>
        Click Me
      </button>
    </>
  );
}

export default ButtonClickHandler;
