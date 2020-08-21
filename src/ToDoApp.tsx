import React, {useState} from "react";

export const ToDoApp: React.FC = () => {
    const EMPTY_TODO: string = "";
    const [todos, setTodos] = useState<string[]>([]);
    const [todoText, setTodoText] = useState<string>(EMPTY_TODO)

    const onTextChange = (e: React.FormEvent<HTMLInputElement>): void => setTodoText(e.currentTarget.value);
    const onAddClick = (e: React.FormEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setTodos(currentToDos => [...currentToDos, todoText]);
        setTodoText(EMPTY_TODO);
    }

    return <>
        <h1>My Dashboard</h1>
        <form>
            <input type={'text'} placeholder={'Enter your task'} value={todoText} onChange={onTextChange}/>
            <button onClick={onAddClick}>ADD</button>
        </form>
        <div>
            <h1>All ToDos</h1>
            <div>
                {todos.map((todo, key) => <p>{todo}</p>)}
            </div>
        </div>
    </>
}