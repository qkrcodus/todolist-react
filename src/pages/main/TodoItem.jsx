import React from 'react'
import styled , {css} from 'styled-components'
import { FaRegCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

//변수 호이스팅: 선언은 호이스팅 되지만 할당은 되지 않는다
//함수 호이스팅: 함수 전체가 호이스팅 된다.
const Remove = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: flex-end;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

//토글 기능을 넣을거라. 생소한 styled 컴포넌트
//Component Selector라는 기능으로 TodoItemBlock위에 커서가 있을때, Remove 컴포넌트를 보여준다.
//styled component는 상위 컴포넌트 조건에따라 자신의 css,
//자신의 조건에 따라 하위 컴포넌트의 css를 바꿀 수 있다
const TodoItemBlock=styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  position: relative;
  &:hover {
  // Remove 컴포넌트의 기본 속성이 나타나게 한다. 
    ${Remove} {
      display: initial;
    }
  }

` 

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    //글자색 회색으로 
    css`
      color: #ced4da;
    `}
`;
// done 이라는 prop에 따라 조건부로 다른 스타일이나 컴포넌트를 렌더링
export const TodoItem = ({id,done,text}) => {
  return (
    <TodoItemBlock>
      {/* 삼항 연산자를 이용하여 props인 */}
       <div>
        {done ? <FaRegCheckCircle/> :<FaRegCircle/>}
       </div>
       <Text done={done}>{text}</Text>
       <Remove>
       <MdDelete />
       </Remove>
    </TodoItemBlock>
  )
}
