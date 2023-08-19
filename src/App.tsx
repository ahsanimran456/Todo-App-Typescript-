import { useContext } from "react";
import Addtodo from "./Components/Addtodo";
import "./App.css";
import { Todocontextprovider } from "./Context/Addcontext"; // Correct the import name
import List from "./Components/List";

function App() {
  // const { TodoList } = useContext(Todocontextprovider);

  // console.log(TodoList);


  // const { TodoList } = useContext(Todocontextprovider)

  // const HandleActive = () => {

  // }
  return (
    <div className="container">
      <div className="main-container">
        <div>
          <h3 className="text-center">
            Todo App
          </h3>
        </div>
        <div className="nav-header">
          <div>
            <span>
              All
            </span>
          </div>
          <div>
            <span>
              Active
            </span>
          </div>
          <div>
            <span>
              Completed
            </span>
          </div>
        </div>
        <Addtodo />
        <List />
      </div>
    </div >
  );
}

export default App;