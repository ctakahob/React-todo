import React from "react";
import Todolist from "./Todo/TodoList";
import Context from "./context";
import Addtodo from "./Todo/AddTodo";

const Styles = {
  div: {
    backgroundColor: "antiquewhite",
    border: "2px solid black",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },
};

function App() {
  let [todos, setTodods] = React.useState([
    { id: 1, completed: false, title: "Купить еды" },
    { id: 2, completed: false, title: "Купить воды" },
    { id: 3, completed: false, title: "Купить кошачей еды" },
  ]);

  function toggleTodo(id) {
    setTodods(
      (todos = todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }))
    );
  }

  function removeTodo(id) {
    setTodods(todos.filter((todo) => todo.id !== id));
  }
  function addTodo(title) {
    setTodods(
      todos.concat([{
        id: Date.now(),
        title,
        completed: false
      }])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <div style={Styles.div}>
          <h1>React-Todo</h1>
          <Addtodo onCreate={addTodo} />
          {todos.length ? (
            <Todolist todos={todos} onToggle={toggleTodo} />
          ) : (
            <div>
              <h3>Все задачи выполнены</h3>
            </div>
          )}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
