import React ,{useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

export const TodoWrapper = () => {
  const[todos,setTodos]=useState([])

  // TodoForm 에서 받은 value 를 넘겨줘야한다. 
  const addTodo=(todo)=>{
  // spread 연산자 ...  todos 객체배열을 복사한다. 
  // uudiv4 고유한 식별자를 생성하는 라이브러리 ,import { v4 as uuidv4 } from 'uuid'; 해줘야함, yarn add uuid
  // TodoForm에서 받은 value를 넘겨받아 todo 객체를 생성하고 todos 배열에 추가하는 함수
  // setTodos([기존 배열 복사,복사한 배열 뒤에 새로운 객체 추가하여 새로운 배열 생성])
    setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}])
    console.log(todos)
  }
  
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        // 기존 todo 객체의 모든 속성을 복사하면서 completed 속성을 반전
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }
  // setTodos는 매개변수로 Todos 값이 될 애들을 받는다.
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };


  return (
    <div className='TodoWrapper'>
      <h1>To Do List</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
      
    </div>
  )
}
