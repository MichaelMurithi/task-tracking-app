import React from 'react'
import {useState,useEffect} from 'react'
import Task from './Task'

const Tasks = ({toDos}) => {
    const [tasks,setTasks] = useState(toDos)
    return (
        <>
         {
            tasks.map((task) => {
                return <Task task={task} key={task.id}/>
            })
        }
        </>
           
    )
}

export default Tasks
