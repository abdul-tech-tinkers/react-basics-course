import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Message from "./Message";
import ListGroup from "./components/ListGroup/ListGroup";
import Alerts from "./components/Alerts";
import Buttons from "./components/Buttons";
function App() {
  const [count, setCount] = useState(0);
  const cities: string[] = ["New York", "Bangalore", "Seattle", "Hyderabad"];
  const [isShowAlert, showAlert] = useState(false);
  const [tags, setTags] = useState(["happy", "cheerful"]);

  function OnSelectItemHandler(item: string): void {
    console.log(item);

    // add
    setTags([...tags, "exiciting"]);

    // Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // update
    setTags(tags.map((tag) => (tag === "happy" ? "happyness" : tag)));
  }

  return (
    <div>
      {/* <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={OnSelectItemHandler}
      /> */}

      {isShowAlert && (
        <Alerts onClose={() => showAlert(false)}>
          My <b>Alert</b>
        </Alerts>
      )}
      {!isShowAlert && (
        <Buttons
          color="primary"
          onClick={() => {
            showAlert(true);
          }}
        >
          Hello World
        </Buttons>
      )}
    </div>
  );
}

export default App;
