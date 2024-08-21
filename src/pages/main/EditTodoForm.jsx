import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, todo}) => {
    const [content, setContent] = useState(todo.content);
    const [date, setDate] = useState(todo.date);
    const todo_id=todo.todo_id;
    const handleDateChange = (e) => {
      setDate(e.target.value);
    };
    const handleChange = (e) => {
      setContent(e.target.value);
    }
    const handleSubmit = (e) => {
        console.log( '수정 완료 버튼 누름');
        e.preventDefault();
        editTodo(content, todo_id, date);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input
        type='text'
        className='todo-input'
        placeholder='할 일을 입력하세요'
        value={content}
        onChange={handleChange}
      />
      <input
        type='datetime-local'
        className='date-input'
        value={date}
        onChange={handleDateChange}
      />
    <button type="submit" className='todo-btn'>수정완료</button>
  </form>
  )
}