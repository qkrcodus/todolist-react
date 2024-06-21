// import React, { useState } from 'react';
// import styled, { css } from 'styled-components';
// import { IoMdAdd } from "react-icons/io";

// export const TodoCreate =({onInsert})=> {
//   const [value,setValue] = useState('');

//   const onChange = () => setOpen(!open);

//   return (
//     <>
//       {open && (
//         <InsertFormPositioner>
//           <InsertForm>
//             <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
//           </InsertForm>
//         </InsertFormPositioner>
//       )}
//       <CircleButton onClick={onToggle} open={open}>
//       <IoMdAdd />
//       </CircleButton>
//     </>
//   );
// }

// export default TodoCreate;