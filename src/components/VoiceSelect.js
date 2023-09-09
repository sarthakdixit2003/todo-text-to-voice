import { useEffect } from "react"

const VoiceSelect = ({onVoiceChange}) => {
	let voices = [];
	let voice;

	useEffect(() => {
		const voiceSelect = document.querySelector("select");

		function populateVoiceList() {
			voices = window.speechSynthesis.getVoices();

			for (const voice of voices) {
				const option = document.createElement("option");
				option.textContent = `${voice.name}`;

				if (voice.default) {
					option.textContent += " — DEFAULT";
				}

				option.setAttribute("data-lang", voice.lang);
				option.setAttribute("data-name", voice.name);
				voiceSelect.appendChild(option);
			}
		}
		populateVoiceList();

		voiceSelect.addEventListener("change", () => {
			voice = voiceSelect.value;
		})
	})

	return (
		<div className="row">
			<select id="select" onChange={() => onVoiceChange(voice)}></select>
		</div>
	)
}

export default VoiceSelect