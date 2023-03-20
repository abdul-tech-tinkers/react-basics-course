import React from "react";
import { Fragment, useState } from "react";
import "./ListGroup.css";
import styled from "styled-components"
// { items:[], heading:string}
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
const list = styled.li``

export default function ListGroup({
  items,
  heading,
  onSelectItem,
}: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length == 0 && <p>No Items Found</p>}
      <div>
        <ul className="list-group">
          {items?.map((item, index) => {
            return (
              <li
                key={item}
                onClick={(event) => {
                  setSelectedIndex(index);
                  onSelectItem(item);
                }}
                className={
                  selectedIndex == index
                    ? "list-group-item active"
                    : "list-group-item"
                }
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
