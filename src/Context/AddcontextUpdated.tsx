import React, { createContext, useState, useContext } from "react";

type TodoType = {
    id: number;
    title: string;
    createdon: string;
    status: string;
};

type TodoContextType = {
    TodoList: TodoType[];
    handleAddProduct: (newProduct: TodoType) => void;
    HandleStatus: (item: TodoType, Checkbox: boolean) => void;
};
type contextprovider = {
    children: React.ReactNode
}
export const Todocontextprovider = createContext<TodoContextType | null>(null);

export const useTodoContext = () => {
    const context = useContext(Todocontextprovider);
    if (!context) {
        throw new Error("useTodoContext must be used within a Todocontextprovider");
    }
    return context;
};

const TodoContext = ({ children }: contextprovider) => {
    const [TodoList, setTodoList] = useState<TodoType[]>([]);
    console.log(TodoList, "list");

    const handleAddProduct = (newProduct: TodoType,) => {
        setTodoList(prevList => [...prevList, newProduct]);
    };
    const HandleStatus = (items: TodoType, Checkbox: boolean) => {
        const itemIndex = TodoList.findIndex(item => item.id === items.id);

        if (itemIndex !== -1) {
            const updatedItems = [...TodoList];
            console.log(itemIndex);
            updatedItems[itemIndex] = { ...updatedItems[itemIndex], status: Checkbox ? "Completed" : "pending" };
            setTodoList(updatedItems);
        }
    }

    const contextValue = {
        TodoList,
        handleAddProduct,
        HandleStatus
    };

    return (
        <Todocontextprovider.Provider value={contextValue}>
            {children}
        </Todocontextprovider.Provider>
    );
};

export default TodoContext;
