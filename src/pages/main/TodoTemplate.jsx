import React from 'react'
import styled from 'styled-components'

const TodoTemplateBlock=styled.div`
width: 512px;
height: 768px;
margin: 0 auto;
background: white;
border-radius:20px;

`
export const TodoTemplate = ({children}) => {
  return (
    <TodoTemplateBlock>
      {children}
    </TodoTemplateBlock>
  )
}
