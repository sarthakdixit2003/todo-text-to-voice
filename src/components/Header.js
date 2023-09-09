import Button from "./Button";
import VoiceSelect from "./VoiceSelect";

const Header = ({title, onToggleAddTask, showAdd, onVoiceChange}) => {
  return (
    <>
    <header className = "header">
        <h1>{title}</h1>
          <Button 
            color = {showAdd ? 'red' : 'green'} 
            title = {showAdd ? 'Close' : 'Add'} 
            onToggleAddTask = {onToggleAddTask}
          />
      </header>
      <VoiceSelect onVoiceChange={onVoiceChange}/>
    </> 
  )
}

// const headingStyle = {
//     color: 'black',
//     backgroundColor: 'red'
// }

export default Header