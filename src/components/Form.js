const Form = ({setTodos, todos, inputText, setInputText}) => {
// const Form = (props) => {
    // const {setTodos} = props;

    const  submitTodoHandler = e => {
        e.preventDefault()
        setTodos([...todos,{
            text: inputText,
            complete: false,
            id: Math.random() * 10000
        }])
        setInputText('')
    }
    const inputTextHandler = e => {
        setInputText(e.target.value);
    }

    return(
        <form>
            <input 
                onChange={inputTextHandler}
                type="text" 
                value={inputText}className="todo-list"
            />
            <button
                onClick={submitTodoHandler}
                className='todo-button'
                type="submit"
            >
            <i className="fas fa-plus-square"></i>
            </button>
            <div className='select'>
                <select
                    name='todos' className='filter-todo'>
                        <option value="all">Todas</option>
                        <option value="complete">Completas</option>
                        <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    );
};


export default Form;