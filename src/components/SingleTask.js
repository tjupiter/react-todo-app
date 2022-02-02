import { FaTimes } from 'react-icons/fa' 

const SingleTask = ({ task, onDelete, onToggle }) => {
  return (
      <div 
        className={`task ${task.reminder && 'reminder'}`}
        onDoubleClick={() => onToggle(task.id)}> 
          <h2>
            {task.text} 
            <FaTimes 
                style={{ color: 'red', cursor: 'pointer' }} 
                onClick={() => onDelete(task.id)} 
                />
            </h2>
        <p>{task.day}</p>
        
      </div>
  );
};

export default SingleTask;
