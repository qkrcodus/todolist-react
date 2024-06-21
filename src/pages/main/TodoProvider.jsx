// import React, { useReducer } from 'react';

// const initialTodos = [
//   {
//     id: 1,
//     text: '밥 맛있게 먹기',
//     done: true
//   },
//   {
//     id: 2,
//     text: '끝내주게 숨쉬기',
//     done: true
//   },
//   {
//     id: 3,
//     text: '작살나게 자기',
//     done: false
//   },
// ];

// //할일 목록 업데이트하는 리듀서함수
// function todoReducer(state, action) {
//   switch (action.type) {
//     case 'CREATE':
//       return state.concat(action.todo);
//     case 'TOGGLE':
//       return state.map(todo =>
//         todo.id === action.id ? { ...todo, done: !todo.done } : todo
//       );
//     case 'REMOVE':
//       return state.filter(todo => todo.id !== action.id);
//     default:
//       throw new Error(`Unhandled action type: ${action.type}`);
//   }
// }

// //리듀서함수, 초기상태 인자로 + 현재상태 디스패치 반환 + children은 해당 컴포넌트의 자식요소
// export const TodoProvider =({ children })=> {
// //초기로 initialTodos, 리듀서 함수 todoReducer인해 업데이트
//   const [state, dispatch] = useReducer(todoReducer, initialTodos);
//   return children;
// }