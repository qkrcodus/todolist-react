import React ,{useState} from 'react'

// 함수를 매개변수로 받는다. 부모->자식 콜백 함수를 전달하여 자식 컴포넌트의 데이터를 부모에게 전달 가능
export const TodoForm = ({addTodo}) => {
    const [content,setContent]=useState('')
    const [emoji, setEmoji] = useState('');
    const [date, setDate] = useState('');
    const handleDateChange = (e) => {
      setDate(e.target.value);
    };
    const handleEmojiChange = (e) => {
      setEmoji(e.target.value);
    };
    const handleChange =(e)=>{
      setContent(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        addTodo({
          content: content,
          date: date,
          emoji: emoji,
        });
        // 넘겨준 다음엔 초기화
        setContent('');
        setEmoji('');
        setDate('');
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' value ={content} className='todo-input' placeholder='할 일과 마감 일자를 입력하세요' onChange={handleChange}/>
        <input
        type='text'
        className='emoji-input'
        placeholder='이모지'
        value={emoji}
        onChange={handleEmojiChange}
      />
       <input
        type='datetime-local'
        className='date-input'
        value={date}
        onChange={handleDateChange}
      />
        <button type='submit' className='todo-btn'>추가</button>
    </form>
  )
}
