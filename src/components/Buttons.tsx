import React from "react";
interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger"; //allowable values
  onClick: () => void;
}
const Buttons = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Buttons;
