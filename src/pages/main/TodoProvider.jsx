import React, { useReducer } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '밥 맛있게 먹기',
    done: true
  },
  {
    id: 2,
    text: '끝내주게 숨쉬기',
    done: true
  },
  {
    id: 3,
    text: '작살나게 자기',
    done: false
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const TodoProvider =({ children })=> {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return children;
}