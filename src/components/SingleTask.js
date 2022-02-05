import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa' 

const SingleTask = ({ task, onDelete, onToggle }) => {
  const childrenEl = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      x: [500, 0], 
    //   transition: {
    //     type: "spring",
    //     damping: 100
    //   } 
    }
  }


  return (
      <motion.div 
        className={`task ${task.reminder && 'reminder'}`}
        onDoubleClick={() => onToggle(task.id)}
        variants={childrenEl}
        > 
          <h2>
            {task.text} 
            <FaTimes 
                style={{ color: 'red', cursor: 'pointer' }} 
                onClick={() => onDelete(task.id)} 
                />
            </h2>
        <p>{task.day}</p>
        
      </motion.div>
  );
};

export default SingleTask;
