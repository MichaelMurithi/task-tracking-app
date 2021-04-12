import './App.css';
import {useState} from 'react'
import { Header } from './components/Header';
import Tasks from './components/Tasks';

function App() {

  const tasks = [
    {
        id:1,
        text: "Doctor's appointment",
        day:"April 12 at 18:00",
        rreminder:"True"
    },
    {
        id:2,
        text: "Doctor's appointment",
        day:"April 12 at 18:00",
        rreminder:"True"
    },
    {
        id:3,
        text: "Take breakfast",
        day:"April 12 at 18:00",
        rreminder:"True"
    },
   
]
  const [toDos,setTasks] = useState(tasks)

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className="container">
     <Header user="Michael"/>
     <Tasks toDos={toDos} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
