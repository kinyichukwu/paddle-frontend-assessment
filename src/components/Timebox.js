import React from "react";

function Timebox({number, text}) {
  return (
    <>
      <div class="time-box">
        <span class="time-box-number">{number}</span>
        <span>{text}</span>
      </div>
    </>
  );
}

export default Timebox;
