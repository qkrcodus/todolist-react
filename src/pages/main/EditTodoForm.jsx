import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);
    const [emoji, setEmoji] = useState(task.emoji); // 이모지 현재 상태 추가

    const handleSubmit = (e) => {
      // 폼 제출시 페이지 새로고침 방지
        e.preventDefault();
        // edit todo
        editTodo({ task: value, emoji: emoji }, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='수정할 내용을 입력하세요' />
    <input
          type="text"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          className="todo-input"
          placeholder='이모지를 입력하세요'
            />
    <button type="submit" className='todo-btn'>수정완료</button>
  </form>
  )
}