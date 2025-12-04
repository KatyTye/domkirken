import View from "../components/View"
import { useState } from "react"

export default function Images() {
	const [imageURL, setImageURL] = useState("")
	const [imageALT, setImageALT] = useState("")

	return (
		<>
			<main className="main-content image-content">
				<ul className="image-content__image-list">
					<li className="image-content__image-item">
						<figure className="image-content__image-holder">
							<img src={"./Image1.jpg"} alt="a image of something" className="image-content__image"
								onClick={event => { setImageURL(event.target.src); setImageALT(event.target.alt) }}>
							</img>
							<figcaption className="image-content__image-context">
								Det er tegning af roskilde domkirke
							</figcaption>
						</figure>
					</li>
					<li className="image-content__image-item">
						<figure className="image-content__image-holder">
							<img src={"./Image2.jpg"} alt="a image of something" className="image-content__image"
								onClick={event => { setImageURL(event.target.src); setImageALT(event.target.alt) }}>
							</img>
							<figcaption className="image-content__image-context">

							</figcaption>
						</figure>
					</li>
					<li className="image-content__image-item">
						<figure className="image-content__image-holder">
							<img src={"./Image3.jpg"} alt="a image of something" className="image-content__image"
								onClick={event => { setImageURL(event.target.src); setImageALT(event.target.alt) }}>
							</img>
							<figcaption className="image-content__image-context">

							</figcaption>
						</figure>
					</li>
					<li className="image-content__image-item">
						<figure className="image-content__image-holder">
							<img src={"./Image4.jpg"} alt="a image of something" className="image-content__image"
								onClick={event => { setImageURL(event.target.src); setImageALT(event.target.alt) }}>
							</img>
							<figcaption className="image-content__image-context">

							</figcaption>
						</figure>
					</li>
				</ul>
			</main>
			<View src={imageURL} alt={imageALT} changeSRC={setImageURL} />
		</>
	)
}