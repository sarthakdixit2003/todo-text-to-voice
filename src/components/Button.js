const Button = ({color, title, onToggleAddTask}) => {

  return (
    <button onClick = {onToggleAddTask} className = "btn" style = {{
			backgroundColor: color
		}}>{title}</button>
  )
}

export default Button