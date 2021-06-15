const Todo = ({todo, todos, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(tarea => tarea.id !== todo.id))
    }
    const completeHandler = () => {
        // console.log(todo.id);
        setTodos(todos.map(item=>{
            if(todo.id === item.id){
                // console.log(item);
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return(
        <div className="todo">
            <li 
                className={`todo-item ${todo.completed && "completed"}`}
            >{todo.text}</li>
            <button 
                onClick={completeHandler}
                className={`complete-btn ${todo.completed && "boton-rojo"}`}
            >
                <i className="fas fa-check"></i>
            </button>
            <button 
                onClick={deleteHandler}
                className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
    
}

export default Todo;