import { useState } from "react";
import Addtodo from "./Components/Addtodo";
import "./App.css";
import List from "./Components/List";
import ActiveTask from "./Components/ActiveTask";
import Completed from "./Components/Completed";
import logo from "./assets/logo1.gif"

function App() {
  const [current, setcurrent] = useState<string>("All");
  return (
    <div className="container">
      <div className="main-container">
        <div className="main-header d-flex  justify-content-center align-items-center ">
          <div>
            <img src={logo} alt="" className="img-fluid text-center" style={{ width: "53px", height: "80px" }} />
          </div>
          <div>
            <h3 className="text-center">
              Todo App
            </h3>
          </div>
        </div>
        <div className="nav-header">
          <div onClick={() => setcurrent("All")} >
            <span className={current === "All" ? "Active" : ""}>
              All
            </span>
          </div>
          <div onClick={() => setcurrent("Active")}>
            <span className={current === "Active" ? "Active" : ""}>
              Active
            </span>
          </div>
          <div onClick={() => setcurrent("Completed")}>
            <span className={current === "Completed" ? "Active" : ""}>
              Completed
            </span>
          </div>
        </div>
        < Addtodo />
        <div className="container-body">
          {current === "All" && <List />}
          {current === "Active" && <ActiveTask />}
          {current === "Completed" && <Completed />}
        </div>
      </div>
    </div >
  );
}

export default App;