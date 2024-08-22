import React ,{useState, useEffect} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const BASE_URL=import.meta.env.VITE_BASE_URL;

const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: 25px;
`;
const Ganada=styled.button`
  font-weight: bold;
  text-align: center;
  font-size: 15px;
   background: blue;
  color: #fff;
  border: none;
  padding: 0.55rem;
  cursor: pointer;
  border-radius: 1rem;

`
const Select=styled.select`
margin-left: 1rem;
 font-weight: normal;
  text-align: center;
  font-size: 15px;
   background: blue;
  color: #fff;
  border: none;
  padding: 0.55rem;
  cursor: pointer;
  border-radius: 1rem;
`
const Month = ({ onMonthChange }) => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);  // 현재 월을 기본값으로 설정

  useEffect(() => {
    onMonthChange(month);  // 월이 변경될 때마다 상위 컴포넌트에 알림
  }, [month, onMonthChange]);

  return (
    <Select value={month} onChange={(e) => setMonth(e.target.value)}>
      {Array.from({ length: 12 }, (_, i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1}월
        </option>
      ))}
    </Select>
  );
};
//Form에서 선택된 날짜를 props로
export const TodoWrapper = ({ selectedDate ,user_id }) => {
  const[todos,setTodos]=useState([])
  const [error, setError] = useState(null);

  // 선택한 날짜, 유저의 투두 리스트 조회
  const fetchTodos = async () => {
    const { month, day } = selectedDate || {};
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/api/todos/${user_id}?month=${month}&day=${day}`);
      if (response.status === 200) {
        setTodos(Array.isArray(response.data) ? response.data : []);
        console.log("받은 데이터" , response.data);
      }
      
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('유저를 찾을 수 없습니다.');
      } else {
        setError('투두리스트를 불러오는 데 실패했습니다.');
      }
    }
  };
    // 선택된 날짜와 유저 변경될 때마다
    useEffect(() => {
      if (selectedDate) {
        fetchTodos();
      }
    }, [selectedDate, user_id]);
 
  // 작성
  const addTodo=async(todo)=>{
  console.log({user_id});
  console.log('addTodo called', todo);
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
  //삭제
  const deleteTodo = async (id) => {
    try {
      console.log("삭제 클릭");
      const response = await axios.delete(`${BASE_URL}/api/todos/${user_id}/${id}`);
      if (response.status === 204) {
        setTodos(todos.filter((todo) => todo.id !== id));
      }
      window.location.reload();
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
  //토글
  const toggleComplete = async(id) => {
    const todo = todos.find((todo) => todo.todo_id === id);
    console.log("토글 함수 실행1");
    if (!todo) return;
    console.log("토글 함수 실행2");
    try {
      console.log("토글 버튼 try문 안에 들어옴");
      const response = await axios.patch(`${BASE_URL}/api/todos/${user_id}/${id}/check`, {
        is_checked: !todo.is_checked,
      });
      if (response.status === 200) {
        setTodos(
          todos.map((todo) =>
            todo.todo_id === id ? { ...todo, is_checked: !todo.is_checked } : todo
          )
        );
      }
    } catch (error) {
      console.error('토글 여부 수정 실패', error);
    }
  };
  //수정
  const editTodo = async (content, todo_id, date) => {
    try {
      const response = await axios.patch(`${BASE_URL}/api/todos/${user_id}/${todo_id}`, {
        date: date,
        content: content,
      });
      if (response.status === 200) {
        setTodos(
          todos.map((todo) =>
            todo.todo_id === todo_id ? { ...todo, content: content, date: date, isEditing: !todo.isEditing } : todo
          )
        );
      }
    } catch (error) {
      console.error('수정 실패', error);
    }
  }
  //이모지 수정
  const editEmoji=async(todo_id, emoji)=>{
    console.log("에딧이모지 실행")
    try{
      const response=await axios.patch(`${BASE_URL}/api/todos/${user_id}/${todo_id}/reviews`,{
        emoji: emoji,
      })
      if(response.status === 200){
        setTodos(
          todos.map((todo) =>
            todo.todo_id === todo_id ? { ...todo, emoji: emoji} : todo
          )
        );

      }

    }catch(error){
      console.log("이모지 수정 실패", error);
    }
  }
  //불러온 데이터 정렬
  const fetchsortedTodos=async()=>{
    const { month, day } = selectedDate || {};
    try{
      const response=await axios.get(`${BASE_URL}/api/todos/${user_id}/sort?month=${month}&day=${day}`);
      if (response.status === 200) {
        setTodos(response.data);  // 받은 데이터로 상태 업데이트
      } else {
        console.error('정렬된 값 받아오기는 성공');
      }

    }catch(error){
      console.log("정렬 실패",error)
    }
  }
  //달 별 투두 불러오기
  const fetchTodosByMonth= async(month)=>{
    try{
      const response=await axios.get(`${BASE_URL}/api/todos/${user_id}/search?month=${month}`);
      setTodos(response.data);
    }catch(error){
      console.log(user_id ,month)
      console.log('달 기준 불러오는데 실패', error);
    }
  }

  return (
    <div className='TodoWrapper'>
      <Title>To Do List</Title>
      <Ganada onClick={fetchsortedTodos}>정렬</Ganada>
      <Month onMonthChange={fetchTodosByMonth}></Month>
      {/* 콜백함수 속성 */}
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo) =>{
        console.log("투두 아이디랑 수정 여부", todo.todo_id, todo.isEditing);
        return todo.isEditing ? (
          <EditTodoForm key={todo.todo_id} editTodo={editTodo} todo={todo} />
        ) : (
          <Todo
            key={todo.todo_id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
            editEmoji={editEmoji}
          />
        )}
      )}
    </div>
  )
}

export default TodoWrapper;