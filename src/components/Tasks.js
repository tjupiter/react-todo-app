import { motion } from "framer-motion";
import SingleTask from "./SingleTask"


const Tasks = ({ tasks, onDelete, onToggle }) => {
    const parent = {
        visible: {
            opacity: 1, transition: {
                staggerChildren: 0.4
            }
        },
        hidden: { opacity: 0 },
    }

    return (
        <motion.div
            initial="hidden"
            animate = "visible"
            variants = { parent }>
            {tasks.map((task) => (
                    <SingleTask 
                        key={task.id} 
                        task={task} 
                        onDelete={onDelete} 
                        onToggle={onToggle}
                        />
                ))}
        </motion.div>
    )
}

export default Tasks; 