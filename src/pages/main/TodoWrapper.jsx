import React ,{useState, useEffect} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid'; // uudiv4 고유한 식별자를 생성하는 라이브러리 ,import { v4 as uuidv4 } from 'uuid'; 해줘야함, yarn add uuid
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const BASE_URL=import.meta.env.VITE_BASE_URL;

const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: large;
`;

//Form에서 선택된 날짜를 props로
export const TodoWrapper = ({ selectedDate ,user_id }) => {
  const[todos,setTodos]=useState([])
  const [error, setError] = useState(null);

  // 선택한 날짜, 유저의 투두 리스트 조회
  const fetchTodos = async () => {
    const { year, month, day } = selectedDate || {};
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/api/todos/${user_id}?month=${month}&day=${day}`);
      if (response.status === 200) {
        setTodos(Array.isArray(response.data) ? response.data : []);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('유저를 찾을 수 없습니다.');
      } else {
        setError('투두리스트를 불러오는 데 실패했습니다.');
      }
    }
  };

  // 선택된 날짜가 변경될 때마다
  useEffect(() => {
    if (selectedDate) {
      fetchTodos();
    }
  }, [selectedDate, user_id]);
 
  // 작성
  const addTodo=async(todo)=>{
  console.log({user_id});
  console.log('addTodo called', todo);
  // spread 연산자 ...  todos 객체배열을 복사한다. 
  // TodoForm에서 받은 value를 넘겨받아 todo 객체를 생성하고 todos 배열에 추가하는 함수
  // setTodos([기존 배열 복사,복사한 배열 뒤에 새로운 객체 추가하여 새로운 배열 생성])
    try{
      const response=await axios.post(`${BASE_URL}/api/todos/${user_id}`, {
        date: todo.date,
        content: todo.content,

      });
  console.log('Server response', response);
      if (response.status === 200) {
        setTodos([...todos, {
          id: response.data.todo_id,
          content: response.data.content,
          date: response.data.date,
          is_checked: response.data.is_checked,
          emoji: response.data.emoji,
          isEditing: false,
          completed: false,
        }]);
      }
    } catch (error) {
      console.error('실패', error);
    }
  }
 
  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/api/todos/${user_id}/${id}`);
      if (response.status === 204) {
        setTodos(todos.filter((todo) => todo.id !== id));
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        if (error.response.data.detail === "유저를 찾을 수 없습니다.") {
          setError("유저를 찾을 수 없습니다.");
        } else if (error.response.data.detail === "To Do를 찾을 수 없습니다.") {
          setError("To Do를 찾을 수 없습니다.");
        }
      } else {
        setError('투두리스트 삭제에 실패했습니다.');
      }
    }
  }
  
  const toggleComplete = async(id) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;

    try {
      const response = await axios.patch(`${BASE_URL}/api/todos/${user_id}/${id}/check`, {
        is_checked: !todo.completed,
      });
      if (response.status === 200) {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      }
    } catch (error) {
      console.error('완료 여부 수정 실패', error);
    }
  };
  // 로컬 변경
  const editTodo = (task, id, emoji, date) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo,content: task, emoji: emoji, date: date,  isEditing: !todo.isEditing } : todo
      )
    );
  }
  //서버 변경
  const editTask = async (task, id, emoji, date) => {
    try {
      const response = await axios.patch(`${BASE_URL}/api/todos/${user_id}/${todo_id}`, {
        date: date,
        content: task,
        emoji: emoji,
      });
      if (response.status === 200) {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, content: task, emoji: emoji, date: date, isEditing: false } : todo
          )
        );
      }
    } catch (error) {
      console.error('수정 실패', error);
    }
  }



  return (
    <div className='TodoWrapper'>
      <Title>To Do List</Title>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
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

export default TodoWrapper;