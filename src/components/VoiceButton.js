const VoiceButton = ({ task, voice }) => {
	let speech = new SpeechSynthesisUtterance();
  let voices = window.speechSynthesis.getVoices();

	const handleClick = () => {
		speech.text = task.text + task.day;
		window.speechSynthesis.speak(speech);
	}
	voices.map((obj) => {
		console.log("name:", obj.name);
		if(obj.name === voice)
		{
			console.log("true");
			speech.voice = obj;
		}
	})

	return (
		<div className="voiceBtn" onClick={handleClick}>
			Generate
		</div>

	)
}

export default VoiceButton