import React from 'react'
import { useState } from 'react'

import { useDispatch } from 'react-redux';

import {addNewTask} from "../redux/actions";

const TaskManager = () => {
      const [text , setText] = useState("")
     
const dispatch = useDispatch();
    const onFormSubmit = (e) =>{
  e.preventDefault();

  dispatch(addNewTask(text));

   setText("")
    }
    const onInputChange = (e) =>{
       setText(e.target.value); 
    }
  return (
    <div>
        <form className='form' onSubmit={onFormSubmit} >
            <input
            placeholder='Enter New Task'
            className='input'
            onChange={onInputChange}
            value={text}
            />
        </form>
    </div>
  )
}

export default TaskManager