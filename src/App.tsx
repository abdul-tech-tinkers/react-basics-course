import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Message from "./Message";
import ListGroup from "./components/ListGroup/ListGroup";
import Alerts from "./components/Alerts";
import Buttons from "./components/Buttons";
import ExpandableText from "./components/ExpandableText";
function App() {
  const [count, setCount] = useState(0);
  const cities: string[] = ["New York", "Bangalore", "Seattle", "Hyderabad"];
  const [isShowAlert, showAlert] = useState(false);
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "john",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushrrom"],
  });

  // update pizza state
  const updatePizza = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "hello"],
    });
  };

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "product1", quantity: "ere" },
      { id: 2, title: "product2", quantity: "ere" },
    ],
  });

  // const updateCart = () => {
  //   setCart({
  //     ...cart,
  //     items: cart.items.map((cartItem) => {
  //       cartItem.id === 2
  //         ? { ...cartItem, quanity: cartItem.quantity + 1 }
  //         : cartItem;
  //     }),
  //   });
  // };

  const handleClick = () => {
    let newGame = {
      ...game,
      player: {
        ...game.player,
        name: "james",
      },
    };
    setGame(newGame);
  };

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

      {/* {isShowAlert && (
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
      )} */}

      <ExpandableText maxChars={245}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh
        tortor id. Nibh venenatis cras sed felis eget velit aliquet sagittis id.
        Elit eget gravida cum sociis natoque. Arcu vitae elementum curabitur
        vitae nunc sed. Ut placerat orci nulla pellentesque dignissim. Non
        tellus orci ac auctor augue mauris augue neque. Dui sapien eget mi proin
        sed libero enim. Id aliquet lectus proin nibh nisl condimentum id
        venenatis a. Aliquet lectus proin nibh nisl condimentum. Etiam sit amet
        nisl purus in mollis. Amet luctus venenatis lectus magna fringilla urna.
        Nibh praesent tristique magna sit amet purus. Quis viverra nibh cras
        pulvinar mattis. Quis varius quam quisque id diam vel quam. Risus
        commodo viverra maecenas accumsan lacus vel facilisis volutpat.
        Ullamcorper malesuada proin libero nunc consequat interdum varius. Risus
        viverra adipiscing at in tellus integer. Ultricies lacus sed turpis
        tincidunt id aliquet risus feugiat in. Elementum curabitur vitae nunc
        sed
      </ExpandableText>

      <ExpandableText>Hello world</ExpandableText>
    </div>
  );
}

export default App;
