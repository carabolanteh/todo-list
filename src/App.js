import {useState, useEffect} from "react";
import './App.css';

import { db } from './firebase-config'

import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  // //Hook de actualizacion de estado
  ////Ejemplo en js vanilla

  // variable
  // const todos = [];

  //Función que actualiza la variable
  // const setTodos = () => {
  //   todos = [{uno:'uno'}]
  // }

  //Dentro de useState esta el valor inicial, en este caso un arreglo
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const traerDesdeFirebase = () => {
    db.collection("todos").get().then((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          docs.push({...doc.data(), id: doc.id});
      });
      setTodos(docs);
    });
  }


  useEffect(() => {
    // const getLocalTodos = () => {
    //   if(localStorage.getItem('todos') == null){
    //     localStorage.setItem('todos', JSON.stringify(todos))
    //   } else {
    //     const todoLocal = JSON.parse(localStorage.getItem('todos'))
    //     setTodos(todoLocal)
    //   }
    // }
    // getLocalTodos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  traerDesdeFirebase();
  },[todos])

  useEffect(() => {
    const filteredHandler = () => {
      switch(status) {
        case 'completed' :
          setFilteredTodos(todos.filter(tarea => tarea.completed === true))
        break;
        case 'uncompleted' :
          setFilteredTodos(todos.filter(tarea => tarea.completed === false))
        break;
        default:
          setFilteredTodos(todos);
      }
    }
    // const saveLocalTodos = () => {
    //   localStorage.setItem('todos', JSON.stringify(todos))
    // }
    filteredHandler();
    // saveLocalTodos();
  },[todos, status])  


  return (
    //solo se puede retornar un solo elem, muy grande
    <div>
      <header>
      <h1> Todo List</h1>
      </header>

      {/* //Le pasamos a Form la funcion que actualiza el estado */}
      <Form 
        todos={todos}
        setTodos={setTodos} 
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />

      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
