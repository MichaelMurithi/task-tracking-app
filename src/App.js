import './App.css';
import { Header } from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const deleteTask = (id) =>{
    console.log("Delete",id)
}
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
    {
        id:4,
        text: "Take Supper",
        day:"April 12 at 18:00",
        rreminder:"false"
    }
]
  return (
    <div className="container">
     <Header user="Michael"/>
     <Tasks toDos={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
