import { useContext, useEffect, useState } from "react";
import { Todocontextprovider } from "../Context/AddcontextUpdated";


type TodoType = {
    id: number;
    title: string;
    createdon: string;
    status: string;
};

// type list_of_todo = {
//     ListArray: TodoType[] | [];
//     setListArray: React.Dispatch<React.SetStateAction<list_of_todo[]>>
// }

function List() {
    const todoContext = useContext(Todocontextprovider);
    const [ListArray, setListArray] = useState<TodoType[]>([]);
    useEffect(() => {
        if (todoContext?.TodoList) {
            setListArray(todoContext.TodoList)
        }
    }, [todoContext?.TodoList]);

    return (
        <div>
            {Array.isArray(ListArray) && ListArray.length > 0 ? (
                <ol className="mt-3 ">
                    {ListArray.map((items, index) => (
                        <li key={index}>
                            {items.title}
                        </li>
                    ))}
                </ol>
            ) : (
                <div className="text-center mt-5">
                    <p>
                        No work Today
                    </p>
                </div>
            )}
        </div>
    )
}

export default List;
