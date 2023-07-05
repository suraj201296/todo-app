import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'

interface singleTodoProps {
    todo : Todo;
    todoList : Todo[];
    setTodoList : React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todoList , setTodoList} : singleTodoProps) => {

    const [ isEdit , setIsEdit] = useState<boolean>(false);
    const [ editTask ,setEditTask] = useState<string>(todo.task);

    const handleDone=(id:number)=> {
        setTodoList(todoList.map((t)=>
            t.id === id ? { ...t,isDone:!t.isDone} : t 
        ))
    };

    const handleDelete=(id:number)=> {
        setTodoList(todoList.filter((t) => t.id != id));
    };

    const handleEdit=(e:React.FormEvent)=> {
        setIsEdit(true);
    };

    const handleSubmit=(e: React.FormEvent, id:number)=>{
        e.preventDefault();
        setTodoList(todoList.map((t)=>(
            t.id == id ? { ...t,task: editTask } : t
        )))
        setIsEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        inputRef.current?.focus();
    },[isEdit]);

    return(
        <form className="singleTodoForm" onSubmit={(e)=>handleSubmit(e, todo.id)}>
            { isEdit ? (
                <input ref={inputRef} className="edit-task-text" value={editTask} onChange={(e) => setEditTask(e.target.value)}/>
             ): 
                todo.isDone ? 
                <s className="todo_text">{todo.task}</s>
                : 
                <span className="todo_text">{todo.task}</span>
            }
            <div>
                <span className="icons" onClick={(e) => handleEdit(e)}>
                    <AiFillEdit/>
                </span>
                <span className="icons" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete/>
                </span>
                <span className="icons" onClick={() => handleDone(todo.id)}>
                    <MdDone/>
                </span>
            </div>
        </form>
    )
}

export default SingleTodo