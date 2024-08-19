import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.content);
    const [emoji, setEmoji] = useState(task.emoji);
    const [date, setDate] = useState(task.date);

    const handleDateChange = (e) => {
      setDate(e.target.value);
    };
    const handleEmojiChange = (e) => {
      setEmoji(e.target.value);
    };
    const handleChange = (e) => {
      setValue(e.target.value);
    }

    // const handleSubmit = async (e) => {
    //   // 폼 제출시 페이지 새로고침 방지
    //   e.preventDefault();
      
    //   // PATCH 요청 보내기
    //   try {
    //     const response = await axios.patch(`/api/todos/${userId}/${task.id}`, {
    //       content: value,
    //       emoji: emoji,
    //       date: date
    //     });
  
    //     // editTodo 호출하여 업데이트된 데이터를 부모 컴포넌트에 전달
    //     editTodo(response.data.content, task.id, response.data.emoji, response.data.date);
    //   } catch (error) {
    //     if (error.response) {
    //       if (error.response.status === 404) {
    //         console.error(error.response.data.detail);
    //       } else {
    //         console.error('An error occurred:', error.response.data);
    //       }
    //     } else {
    //       console.error('Error:', error.message);
    //     }
    //   }
    // };
    const handleSubmit = (e) => {
      // 폼 제출시 페이지 새로고침 방지
        e.preventDefault();
        // edit todo
        editTodo(value, task.id, emoji, date);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input
        type='text'
        className='todo-input'
        placeholder='할 일을 입력하세요'
        value={value}
        onChange={handleChange}
      />
      <input
        type='text'
        className='todo-input'
        placeholder='이모지를 입력하세요'
        value={emoji}
        onChange={handleEmojiChange}
      />
      <input
        type='datetime-local'
        className='todo-input'
        value={date}
        onChange={handleDateChange}
      />
    <button type="submit" className='todo-btn'>수정완료</button>
  </form>
  )
}