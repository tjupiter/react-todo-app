import SingleTask from "./SingleTask"

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map(task => (
                <SingleTask 
                    key={task.id} 
                    task={task} 
                    onDelete={onDelete} 
                    onToggle={onToggle}
                    />
                ))}
        </>
    )
}

export default Tasks; 