import { useState, useContext, useEffect } from "react";
import { Todocontextprovider } from "../Context/AddcontextUpdated";
type CompletedtaskType = {
    id: number;
    title: string;
    createdon: string;
    status: string;
}
function Completed() {
    const todoContext = useContext(Todocontextprovider);
    const [Completed, setCompleted] = useState<CompletedtaskType[]>([]);

    useEffect(() => {
        if (todoContext?.TodoList) {
            const filterItems = todoContext?.TodoList.filter(items => items.status === "Completed")
            setCompleted(filterItems)
        }
    }, [todoContext?.TodoList]);

    return (
        <div className="active-task">
            {Array.isArray(Completed) && Completed.length > 0 ? (
                <ul className="mt-3  ms-4 p-0 ">
                    {Completed.map((items, index) => {
                        const createdOnDate = new Date(items.createdon); // Convert the string to a Date object
                        const formattedTime = createdOnDate.toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true
                        });
                        return (
                            <li key={index} className="each-item mt-1">
                                <div className="each-item-inner-completed">
                                    <div className="completed-title">
                                        <span className="text-break">
                                            {items.title}
                                        </span>
                                    </div>
                                    <div className="completed-time">
                                        <span className="createdAt">
                                            {`Created at ${formattedTime}`}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <div className="text-center mt-5">
                    <p>
                        No work completed
                    </p>
                </div>
            )}
        </div>
    );
}

export default Completed;