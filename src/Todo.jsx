import React from "react";
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
const Todo = (prop)=>{
    return(
        <>
        <div className='todo_style'>
        <Button onClick={()=>{
            prop.delete(prop.id)
        }}><ClearIcon /></Button>
        <li>{prop.text}</li>
        </div>
        </>
    )
}
export default Todo;