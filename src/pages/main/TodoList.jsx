import React from 'react';
import styled from 'styled-components';
import { TodoItem } from './TodoItem';

const TodoListBlock=styled.div`
  flex: 1; 
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;

`;

export const TodoList = () => {
  return (
    <div>
      <TodoListBlock>
        {/* 하드코딩으로 데이터 넣어주기 */}
        <TodoItem text="밥 맛있게 먹기" done={true}/>
        <TodoItem text="끝내주게 숨쉬기" done={true}/>
        <TodoItem text="작살나게 자기" done={false}/>

      </TodoListBlock>
    </div>
  );
};
