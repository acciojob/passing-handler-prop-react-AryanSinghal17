import React, { useState } from "react";

const Selection = ({ applyColor }) => {
  const [selectionStyle, updateSelectionStyle] = useState({
    background: ""
  });

  return (
    <div
      className="fix-box"
      style={{ background: selectionStyle.background }}
      onClick={() => applyColor(updateSelectionStyle)}
    >
      Click Me
    </div>
  );
};

export default Selection;