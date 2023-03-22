import React, { useState } from "react";
interface Props {
  children: string;
  maxChars?: number;
}
const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, SetExpanded] = useState(false);
  const OnButtonClickHandler = () => {
    SetExpanded(!isExpanded);
  };
  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <button onClick={OnButtonClickHandler}>
        {isExpanded ? "less" : "more"}
      </button>
    </p>
  );
};

export default ExpandableText;
