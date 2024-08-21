import React from 'react';
import styled from 'styled-components';

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

export const Todo = ({ todo, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <TodoContainer>
      <TodoContent>
        <input
          type="checkbox"
          checked={todo.is_checked}
          onChange={() => toggleComplete(todo.todo_id)}
        />
        <TodoText $completed={todo.is_checked}>{todo.content}</TodoText>
      </TodoContent>
      <div>
        <TodoButton onClick={() => editTodo(todo.content, todo.todo_id, todo.emoji, todo.date)}>Edit</TodoButton>
        <TodoButton onClick={() => deleteTodo(todo.todo_id)}>Delete</TodoButton>
      </div>
    </TodoContainer>
  );
};

