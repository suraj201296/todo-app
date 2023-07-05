import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import '../styles/todolist.css';

interface todoListProps {
    todoList : Todo[],
    setTodoList : React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todoList , setTodoList} : todoListProps) => {
    return(
        <div className="todolist">
            {
                todoList.map((todo) => (
                    <SingleTodo todo={todo} key={todo.id} todoList = { todoList}
                    setTodoList={setTodoList}/>

                ))
            }
        </div>
    )
}

export default TodoList