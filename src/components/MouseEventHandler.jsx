import React from "react";

function MouseEventHandler() {
  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <>
      <h2
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={hover ? "text-glow" : ""}
      >
        Hover me to see the Glow Effect
      </h2>
    </>
  );
}

export default MouseEventHandler;
