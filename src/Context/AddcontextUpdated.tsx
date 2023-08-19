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
    console.log(TodoList,"list");

    const handleAddProduct = (newProduct: TodoType) => {
        setTodoList(prevList => [...prevList, newProduct]);
    };

    const contextValue = {
        TodoList,
        handleAddProduct
    };

    return (
        <Todocontextprovider.Provider value={contextValue}>
            {children}
        </Todocontextprovider.Provider>
    );
};

export default TodoContext;
