import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ddd;
`;

const TodoContent = styled.div`
  display: flex;
  align-items: center;
`;

const TodoText = styled.span`
  margin-left: 10px;
  text-decoration: ${({ $completed }) => ($completed ? 'line-through' : 'none')};
`;

const TodoButton = styled.button`
  margin-left: 5px;
`;

export const Todo = ({ todo, deleteTodo, editTodo, toggleComplete ,editEmoji }) => {
  const [emoji, setEmoji] = useState(todo.emoji);
  const handleEmojiChange = (e) => {
    console.log("핸들이모지체인지실행")
    setEmoji(e.target.value);
    editEmoji(todo.todo_id, emoji);  // 수정된 이모지와 todo_id를 editEmoji 함수에 전달
    }; 
  
  return (
    <TodoContainer>
      <TodoContent>
        <input
          type="checkbox"
          checked={todo.is_checked}
          onChange={() => { console.log("토글 버튼 누름 "); toggleComplete(todo.todo_id)}}
        />
        <TodoText $completed={todo.is_checked}>{todo.content}</TodoText>
      </TodoContent>
      <div>
        <label htmlFor={`emoji-select-${todo.todo_id}`}></label>
        <select id={`emoji-select-${todo.todo_id}`} value={emoji} onChange={(e)=>{ console.log("실행?"); handleEmojiChange(e)}}>
        <option value="">Emoji</option>
        <option value="😊">😊</option>
        <option value="😅">😅</option>
        <option value="😫">😫</option>
        <option value="😞">😞</option>
        <option value="😤">😤</option>
        </select>
        <TodoButton onClick={() => editTodo(todo.content, todo.todo_id, todo.date)}>Edit</TodoButton>
        <TodoButton onClick={() => deleteTodo(todo.todo_id)}>Delete</TodoButton>
      </div>
    </TodoContainer>
  );
};

