import React from "react";

interface ButtonLargeProps {
  onClick: () => void;
  text: string;
}

export default function ButtonLarge({onClick, text}: ButtonLargeProps) {
  return <button className="btn btn-primary shadow-md btn-md" onClick={onClick}>{text}</button>
}