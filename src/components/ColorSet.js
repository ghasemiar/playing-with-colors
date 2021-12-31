import ColorFullButton from "./ColorFullButton";
import React, { useState } from "react";
export default function ColorSet() {
  const [colorCode, setcolorCode] = useState("");
  const [submitColor, setsubmitColor] = useState(false);

  return (
    <div>
      <ColorFullButton
        colorName={submitColor ? colorCode : "red"}
        forceColor={submitColor}
      />
      <ColorFullButton
        colorName={submitColor ? colorCode : "blue"}
        forceColor={submitColor}
      />
      <ColorFullButton
        colorName={submitColor ? colorCode : "green"}
        forceColor={submitColor}
      />
      <ColorFullButton
        colorName={submitColor ? colorCode : "yellow"}
        forceColor={submitColor}
      />
      <br />
      <input
        type='text'
        onChange={(event) => setcolorCode(event.target.value)}
      />
      <br />
      <button
        className='button'
        type='submit'
        onClick={() => {
          if (colorCode !== "") setsubmitColor(true);
          else setsubmitColor(false);
          console.log(colorCode);
        }}>
        {submitColor ? "clean and click" : "set your color"}
      </button>
    </div>
  );
}
