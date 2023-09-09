import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle, voice}) => {
  return (
    <>
        {tasks.map((task) => (
            <Task key = {task.id} task = {task} onDelete = {onDelete} onToggle = {onToggle} voice={voice}/>
        ))}
    </>
  )
}

export default Tasks