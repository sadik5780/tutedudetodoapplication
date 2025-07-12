import { useState } from "react";
import "./App.css";
import deleteIcon from "./assets/delete.svg";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      setTodoList([...todoList, { text: todo, completed: false }]);
      setTodo("");
      alert("Todo added successfully");
    }
    if (todo === "") {
      alert("Please enter a todo");
    }
  };

  const toggleTodo = (index) => {
    const updatedList = [...todoList];
    updatedList[index].completed = !updatedList[index].completed;
    setTodoList(updatedList);
  };

  const deleteTodo = (index) => {
    setTodoList(todoList.filter((todo, i) => i !== index));
  };

  return (
    <div className="App">
      <h1 className="mainheading">Todo Application</h1>
      <div className="todocontainer">
        <input
          type="text"
          className="todoinput"
          placeholder="Enter Todo"
          onChange={handleInputChange}
          value={todo}
        />
        <button className="addtodo" onClick={addTodo}>
          Add Todo
        </button>
        <ul className="todoitems">
          {todoList.map((item, index) => (
            <li className="todoitem" key={index}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleTodo(index)}
              />
              <span className={item.completed ? "completed" : ""}>
                {item.text}
              </span>
              <button
                onClick={() => {
                  deleteTodo(index);
                }}
                className="deletebutton"
              >
                <img src={deleteIcon} alt="Delete" className="delete-icon" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
