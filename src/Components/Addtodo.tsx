import { FormEvent, useContext, useState } from "react";
import { Todocontextprovider } from "../Context/AddcontextUpdated";
// import { Todocontextprovider } from "../Context/Addcontext";


function Addtodo() {
    const [Todo, setTodo] = useState<string>("");
    const todoContext = useContext(Todocontextprovider);

    // console.log(TodoList?.setTodoList);

    const handAddTodo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Todo.trim() != "") {
            const obj = {
                id: Math.random(),
                title: Todo,
                createdon: new Date().toString(),
                status: "pending"
            }
            todoContext?.handleAddProduct(obj);
            setTodo(""); // Clear the input field after adding
        }else{
            alert("empty")
        }
    }
    return (
        <form onSubmit={handAddTodo}>
            <div className="d-flex align-items-center">
                <div className="get-input">
                    <input type="text" placeholder="write your todo" value={Todo} name="" id="" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)} />
                </div>
                <div className="form-btn">
                    <button type="submit">Add</button>
                </div>
            </div>
        </form>
    );
}

export default Addtodo;