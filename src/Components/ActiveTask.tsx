import { useState, useContext, useEffect } from "react";
import { Todocontextprovider } from "../Context/AddcontextUpdated";


type activetaskType = {
    id: number;
    title: string;
    createdon: string;
    status: string;
}
function ActiveTask() {
    const [ActiveTask, setActiveTask] = useState<activetaskType[]>([]);
    const todoContext = useContext(Todocontextprovider);
    useEffect(() => {
        if (todoContext?.TodoList) {
            const filterItems = todoContext?.TodoList.filter(items => items.status === "pending")
            setActiveTask(filterItems)
        }
    }, [todoContext]);
    return (
        <div className="active-task">
            {Array.isArray(ActiveTask) && ActiveTask.length > 0 ? (
                <ol className="mt-3 ">
                    {ActiveTask.map((items, index) => {
                        const createdOnDate = new Date(items.createdon); // Convert the string to a Date object

                        const formattedTime = createdOnDate.toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true
                        });
                        return (
                            <li key={index}>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        {items.title}
                                    </div>
                                    <div>
                                        {formattedTime}
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            ) : (
                <div className="text-center mt-5">
                    <p>
                        All work Done !
                    </p>
                </div>
            )}
        </div>
    );
}

export default ActiveTask;