// Tooltip.js

import React from "react";

const Tooltip = ({ text }) => {
  return (
    <div className="toolTip fixed z-50 bg-[#333] text-white rounded-[0.25rem] pointer-events-none">
      {text}
    </div>
  );
};

export default Tooltip;
