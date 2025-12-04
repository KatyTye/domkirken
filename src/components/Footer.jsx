import { FaGithub } from "react-icons/fa"

export default function Footer() {

	return (
		<footer className="bottom-content">
			<a className="bottom-content__redirect" href="https://nmdanmarkskirkerprod.blob.core.windows.net/files/Roskilde_Domkirke_-_planer.pdf"
				target="_blank">Tegninger</a>
			<a className="bottom-content__redirect" href="https://github.com" target="_blank">
				<FaGithub className="bottom-content__redirect-icon" />
			</a>
			<a className="bottom-content__redirect" href="http://holsoe-ark.dk/?p=447&lang=en"
				target="_blank">Tag Konstruktion</a>
		</footer>
	)
}

export {
	Footer
}