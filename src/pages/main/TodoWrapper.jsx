import React ,{useState, useEffect} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid'; // uudiv4 고유한 식별자를 생성하는 라이브러리 ,import { v4 as uuidv4 } from 'uuid'; 해줘야함, yarn add uuid
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: large;
`;
//선택된 날짜를 props로
export const TodoWrapper = ({ selectedDate }) => {
  const[todos,setTodos]=useState([])
  const [error, setError] = useState(null);
  const {user_id}=useParams(); // useParams훅으로 user_id가져온다
  // TodoForm 에서 받은 value 를 넘겨줘야한다. 

  // 지정된 날짜의 투두리스트를 불러오는 함수
  const fetchTodos = async (month, day) => {
    setError(null);
    try {
      const response = await axios.get(`/api/todos/${user_id}?month=${month}&day=${day}`);
      if (response.status === 200) {
        setTodos(Array.isArray(response.data) ? response.data : []); // 받은 response todo가 배열
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('유저를 찾을 수 없습니다.');
      } else {
        setError('투두리스트를 불러오는 데 실패했습니다.');
      }
    }
  };
  //선택된 날짜가 변경될 때마다 해당 날짜의 기본 날짜 투두리스트 조회 
  useEffect(() => {
    const today = new Date();
    const month = today.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줌
    const day = today.getDate();
    fetchTodos(month, day); // 기본 날짜로 투두리스트 조회
  }, [selectedDate,user_id]);

  const addTodo=(todo)=>{
  // spread 연산자 ...  todos 객체배열을 복사한다. 
  // TodoForm에서 받은 value를 넘겨받아 todo 객체를 생성하고 todos 배열에 추가하는 함수
  // setTodos([기존 배열 복사,복사한 배열 뒤에 새로운 객체 추가하여 새로운 배열 생성])
    setTodos([...todos,{id:uuidv4(), ...todo,completed:false,isEditing:false}])
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
      <Title>To Do List</Title>
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
