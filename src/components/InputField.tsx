 
 
 interface todoProps  {
    todo : string,
    setTodo : React.Dispatch<React.SetStateAction<string>>
    handleForm : (e : React.FormEvent)=>void
 }
 
 const InputField = ({ todo , setTodo ,handleForm } : todoProps) => {
    return(
        <form className="todo_form" onSubmit={(e) => handleForm(e)}>
            <input type="text" className="input_box" placeholder="Enter a task"
            value={todo} onChange={(e)=> 
                setTodo(e.target.value)
            } />
            <button type="submit" id="goBtn">GO</button>
        </form>
    )
 }

 export default InputField