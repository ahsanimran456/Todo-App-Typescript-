import { useContext, useEffect, useState } from "react";
import { Todocontextprovider } from "../Context/AddcontextUpdated";
import { FormCheck } from "react-bootstrap";
import done from "../assets/done.gif"
import timer from "../assets/timer.gif"

type TodoType = {
    id: number;
    title: string;
    createdon: string;
    status: string;
};

function List() {
    const todoContext = useContext(Todocontextprovider);
    const [ListArray, setListArray] = useState<TodoType[]>([]);

    useEffect(() => {
        if (todoContext?.TodoList) {
            setListArray(todoContext.TodoList);
        }
    }, [todoContext?.TodoList]);

    const HandleCheckbox = (e: React.ChangeEvent<HTMLInputElement>, item: TodoType) => {
        const Checkbox = e.target.checked;
        todoContext?.HandleStatus(item, Checkbox);
    };

    return (
        <div>
            {Array.isArray(ListArray) && ListArray.length > 0 ? (
                <ul className="mt-3 ">
                    {ListArray.map((items, index) => {
                        const createdOnDate = new Date(items.createdon);
                        const formattedTime = createdOnDate.toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                        });
                        return (
                            <li key={index} className="each-item mt-1">
                                {items?.status === "Completed" ?
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
                                    //     <del>
                                    //         <span className="text-break">
                                    //             {items.title} <span>Completed *</span>
                                    //         </span>
                                    //     </del>
                                    //     <div>
                                    //         <span className="createdAt">{`Created at ${formattedTime}`}</span>
                                    //     </div>

                                    // </div>
                                    <div className="each-item-inner">
                                        <div className="each-item-inner-date">
                                            <span className="createdAt">{formattedTime}</span>
                                        </div>
                                        <div className="each-item-main-done">
                                            <div>
                                                <img src={done} style={{ width: "53px", height: "30px" }} alt="" />
                                                <del>
                                                    <span className="text-break">
                                                        {items.title}
                                                    </span>
                                                </del>
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
                                    :
                                    <div className="each-item-inner">
                                        <div className="each-item-inner-date">
                                            <span className="createdAt">{formattedTime}</span>
                                        </div>
                                        <div className="each-item-main">
                                            <div className="d-flex align-items-center">
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
                                        {/* <div className="each-item-first">
                                            <FormCheck
                                                type="checkbox"
                                                // label={`Created at ${formattedTime}`} // Display a label for the checkbox
                                                onChange={(e) => HandleCheckbox(e, items)}
                                                name={items.title}
                                                checked={items?.status === "Completed" ? true : false}
                                            />
                                        </div> */}


                                    </div>
                                }

                            </li>
                        );
                    })}
                </ul>
            ) : (
                <div className="text-center mt-5">
                    <p>No work Today</p>
                </div>
            )}
        </div>
    );
}

export default List;
