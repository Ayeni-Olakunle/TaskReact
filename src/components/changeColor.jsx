import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "./features/them";

export default function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="holdChange">
      <input
        type="text"
        className="inputForm1"
        placeholder="Input a Valid color"
        onChange={(e) => setColor(e.target.value)}
      />
      <button
        type="Submit"
        className="submit"
        onClick={dispatch(changeColor(color))}
      >
        Change Color
      </button>
    </div>
  );
}
