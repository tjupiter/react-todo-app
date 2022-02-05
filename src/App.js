import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";



function App() {

  // show/hide add task component
  const[showAddTask, setShowAddTask] = useState(false)

  // Contaxt API or Redax could be used to store this
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: 'Finish React Task Tracker',
      day: '14:30 on Friday, 5 February 2022',
      reminder: true,
    },
    {
      id: 2,
      text: 'Add Animation to Todo App',
      day: '17:00 on Thursday, 10 February 2022',
      reminder: true,
    },
    {
      id: 3,
      text: 'Complete Job Application',
      day: '12:00 on Monday, 7 February 2022',
      reminder: false,
    },
  ])

  // Toggle Header
  const toggleHeader = () => { setShowAddTask(!showAddTask) }

  // Add Task
  const addTask = (task) => {
    // since there's no real back-end to the page we need to generate the id here
    const id = Math.floor(Math.random() * 100000) 
    const newTask = { id, ...task }
    setTask((tasks) => [...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter(task => id !== task.id ))
  }

  // Toggle Task
  const toggleReminder = (id) => {
    setTask(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header title='Task Tracker' onToggle={toggleHeader} showAddTask={showAddTask}/>

      {
        showAddTask && <AddTask onAdd={addTask} showAddTask={showAddTask}/>
      }

      {tasks.length > 0 
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
        : <div>There are no tasks to show</div>
      }
    </div>
  );
}

export default App;


