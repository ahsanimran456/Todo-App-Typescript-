import { createContext, useState } from "react";


type todoType = {
    id: number;
    title: string;
    createdon: string;
    status: string
}

type todocontextType = {
    TodoList: todoType | null;
    setTodoList: React.Dispatch<React.SetStateAction<todoType | null>>
}
type contextprovider = {
    children: React.ReactNode
}
export const Todocontextprovider = createContext<todocontextType | null>(null)
function TodoContext({ children }: contextprovider) {
    const [TodoList, setTodoList] = useState<todoType | null>(null);
    console.log('====================================');
    console.log(TodoList);
    console.log('====================================');
    return (

        <Todocontextprovider.Provider value={{ TodoList, setTodoList }}>
            {children}
        </Todocontextprovider.Provider>

    );
}

export default TodoContext;