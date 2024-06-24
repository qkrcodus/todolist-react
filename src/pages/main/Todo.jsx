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
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

const TodoButton = styled.button`
  margin-left: 5px;
`;

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <TodoContainer>
      <TodoContent>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <TodoText completed={task.completed}>{task.content}</TodoText>
      </TodoContent>
      <div>
        <TodoButton onClick={() => editTodo(task.content, task.id, task.emoji, task.date)}>Edit</TodoButton>
        <TodoButton onClick={() => deleteTodo(task.id)}>Delete</TodoButton>
      </div>
    </TodoContainer>
  );
};

