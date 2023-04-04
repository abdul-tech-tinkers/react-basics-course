// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Message from "./Message";
// import ListGroup from "./components/ListGroup/ListGroup";
// import Alerts from "./components/Alerts";
// import Buttons from "./components/Buttons";
// import ExpandableText from "./components/ExpandableText";
// import Form from "./components/Form";
// import ExpenseList from "./expense-tracker/components/ExpenseList";
// import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
// import ExpenseForm from "./expense-tracker/components/ExpenseForm";
// import categories from "./expense-tracker/Categories";
import axios from "axios";
import { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      var response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response.data);
      setUsers(response.data);
    }
    fetchData();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;
