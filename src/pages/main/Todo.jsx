import React from 'react'
import { MdEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

export const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}  {task.emoji && <span>{task.emoji}</span>}</p>
        <div>
        <MdEdit  className="edit-icon" onClick={()=>editTodo(task.id)} />
        <FaRegTrashAlt className="delete-icon" onClick={()=>deleteTodo(task.id)} />
        </div>
    </div>
  )
}
