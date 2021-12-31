import React, { useState } from "react";

export default function ColorFullButton(props) {
  const [color, setcolor] = useState("");
  const [clicked, setcliced] = useState(false);

  return (
    <button
      style={{ backgroundColor: props.forceColor ? props.colorName : "" }}
      className={"button " + (props.forceColor ? "" : [clicked ? color : null])}
      onClick={() => {
        if (clicked === true) {
          setcliced(false);
        }
        if (clicked === false) {
          setcliced(true);
          setcolor(props.colorName);
        }
      }}>
      color : {props.colorName}
    </button>
  );
}
