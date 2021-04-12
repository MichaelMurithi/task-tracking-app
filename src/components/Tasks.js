import React from 'react'
import Task from './Task'

const Tasks = ({toDos,onDelete}) => {
    const tasks = toDos
    return (
        <>
         {
            tasks.map((task,index) => {
                return <Task task={task} key={index} onDelete={onDelete}/>
            })
        }
        </>
           
    )
}

export default Tasks
