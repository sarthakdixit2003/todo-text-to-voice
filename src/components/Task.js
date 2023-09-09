import VoiceButton from "./VoiceButton"

const Task = ({ task, onDelete, onToggle, voice }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}
        <span className="material-symbols-outlined" onClick={() => onDelete(task.id)} >
          close
        </span>
      </h3>
      <p>{task.day}</p>
      <VoiceButton task={task} voice={voice} />
    </div>
  )
}

export default Task