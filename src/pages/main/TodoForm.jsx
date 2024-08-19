import React ,{useState, useEffect} from 'react'

// 함수를 매개변수로 받는다. 부모->자식 콜백 함수를 전달하여 자식 컴포넌트의 데이터를 부모에게 전달 가능
export const TodoForm = ({addTodo}) => {
    const [value,setValue]=useState('')
    const [emoji, setEmoji] = useState('');
    const [date, setDate] = useState('');


  
    const handleDateChange = (e) => {
      setDate(e.target.value);
    };

    const handleEmojiChange = (e) => {
      setEmoji(e.target.value);
    };
  
    // 이벤트 핸들러로 사용자 입력한 값 확인
    const handleChange =(e)=>{
        // setValue 는 매개변수로 새롭게 업데이트될 value값을 갖는다.
        setValue(e.target.value)
    }
    const handleSubmit=(e)=>{
        // form 이 제출될때 디폴트로 페이지가 새로고침되는 일을 방지
        e.preventDefault();
        // console.log(value)
        // value를 TodoState로 넘겨줘야한다. 어떻게? 부모요소에 
        addTodo({
          content: value,
          date: date,
          emoji: emoji,
        });
        // 넘겨준 다음엔 초기화
        setValue('');
        setEmoji('');
        setDate('');
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        {/* 디버깅용 onChange={(e)=>console.log(e.target.value)} */}
        <input type='text' className='todo-input' placeholder='할 일을 입력하세요' onChange={handleChange}/>
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
        <button type='submit' className='todo-btn'>추가</button>
    </form>
  )
}
