import {db} from '../firebase-config';

const Form = ({setTodos, todos, inputText, setInputText, setStatus}) => {
// const Form = (props) => {
    // const {setTodos} = props;

    const  submitTodoHandler = e => {
        e.preventDefault()
        setTodos([...todos,{
            text: inputText,
            completed: false,
            id: Math.random() * 10000
        }])
        guardarEnFirebase({
            text: inputText,
            completed: false,
            id: Math.random() * 10000
        })
        setInputText('')
    }
    const inputTextHandler = e => {
        setInputText(e.target.value);
    }

    const statusHandler = event => {
        setStatus(event.target.value);
    }

    const guardarEnFirebase = tarea =>{
        // Add a new document with a generated id.
        db.collection("todos").add(tarea)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
             console.error("Error adding document: ", error);
        });
    }

    return(
        <form>
            <input 
                onChange={inputTextHandler}
                type="text" 
                value={inputText}className="todo-list"
            />
            <button
            disabled={inputText.trim().length === 0}
                onClick={submitTodoHandler}
                className='todo-button'
                type="submit"
            >
            <i className="fas fa-plus-square"></i>
            </button>
            <div className='select'>
            <select
                name="todos" 
                className="filter-todo"
                onChange={statusHandler}
            >
                <option value="all">Todas</option>
                <option value="completed">Completas</option>
                <option value="uncompleted">Incompletas</option>
            </select>
            </div>
        </form>
    );
};


export default Form;