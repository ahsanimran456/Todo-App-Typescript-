import { useState } from "react";
import Addtodo from "./Components/Addtodo";
import "./App.css";
import List from "./Components/List";
import ActiveTask from "./Components/ActiveTask";
import Completed from "./Components/Completed";

function App() {
  const [current, setcurrent] = useState<string>("All");
  return (
    <div className="container">
      <div className="main-container">
        <div>
          <h3 className="text-center">
            Todo App
          </h3>
        </div>
        <div className="nav-header">
          <div onClick={() => setcurrent("All")} >
            <span>
              All
            </span>
          </div>
          <div onClick={() => setcurrent("Active")}>
            <span>
              Active
            </span>
          </div>
          <div onClick={() => setcurrent("Completed")}>
            <span>
              Completed
            </span>
          </div>
        </div>
        < Addtodo />
        {current === "All" && <List />}
        {current === "Active" && <ActiveTask />}
        {current === "Completed" && <Completed />}
      </div>
    </div >
  );
}

export default App;