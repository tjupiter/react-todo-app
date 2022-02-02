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
      day: 'Feb 2nd at 2:30',
      reminder: true,
    },
    {
      id: 2,
      text: 'Citizenship Ceremony',
      day: 'Feb 4th at 11:00',
      reminder: true,
    },
    {
      id: 3,
      text: 'Complete Job Application',
      day: 'Feb 5th at 4:00',
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
        showAddTask && <AddTask onAdd={addTask} />
      }

      {tasks.length > 0 
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
        : <div>There are no tasks to show</div>
      }
    </div>
  );
}

export default App;


