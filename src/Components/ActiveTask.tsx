import { useState, useContext, useEffect } from "react";
import { Todocontextprovider } from "../Context/AddcontextUpdated";
import { FormCheck } from "react-bootstrap";
import done from "../assets/done.gif"
import timer from "../assets/timer.gif"

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
    const HandleCheckbox = (e: React.ChangeEvent<HTMLInputElement>, item: activetaskType) => {
        const Checkbox = e.target.checked;
        todoContext?.HandleStatus(item, Checkbox);
    };
    return (
        <div className="active-task">
            {Array.isArray(ActiveTask) && ActiveTask.length > 0 ? (
                <ul className="mt-3  ">
                    {ActiveTask.map((items, index) => {
                        const createdOnDate = new Date(items.createdon); // Convert the string to a Date object

                        const formattedTime = createdOnDate.toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true
                        });
                        return (
                            <li key={index} className="each-item mt-1">
                                {items?.status !== "Completed" &&
                                    // <div className="each-item-inner">
                                    //     <div className="each-item-first">
                                    //         <FormCheck
                                    //             type="checkbox"
                                    //             // label={`Created at ${formattedTime}`} // Display a label for the checkbox
                                    //             onChange={(e) => HandleCheckbox(e, items)}
                                    //             name={items.title}
                                    //             checked={items?.status === "Completed" ? true : false}
                                    //         />
                                    //     </div>
                                    //     <div >
                                    //         <span className="text-break">
                                    //             {items.title}
                                    //         </span>
                                    //     </div>
                                    //     <div>
                                    //         <span className="createdAt"> {`Created at ${formattedTime}`}</span>
                                    //     </div>
                                    // </div>
                                    <div className="each-item-inner">
                                        <div className="each-item-inner-date">
                                            <span className="createdAt">{formattedTime}</span>
                                        </div>
                                        <div className="each-item-main">
                                            <div>
                                                <img src={timer} style={{ width: "30px", height: "30px" }} alt="" />
                                                <span className="text-break">
                                                    {items.title}
                                                </span>
                                            </div>
                                            <div>
                                                <FormCheck
                                                    type="checkbox"
                                                    // label={`Created at ${formattedTime}`} // Display a label for the checkbox
                                                    onChange={(e) => HandleCheckbox(e, items)}
                                                    name={items.title}
                                                    checked={items?.status === "Completed" ? true : false}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                }
                            </li>
                        );
                    })}
                </ul>
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