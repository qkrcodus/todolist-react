import React from 'react'
import styled from 'styled-components'

const TodoTemplateBlock=styled.div`
width: 512px;
height: 768px;
margin: 0 auto;
background: white;
border-radius:20px;

`
// props로 부모요소 안에 묶인 자식요소 전달해줌
export const TodoTemplate = ({children}) => {
  return (
    <TodoTemplateBlock>
      {children}
    </TodoTemplateBlock>
  )
}
