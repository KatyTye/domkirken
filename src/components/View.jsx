export default function View({ src = "", alt = "", changeSRC }) {

	return (
		<>
			{
				(src != "") && <dialog className="dialog-menu" open>
					<div className="dialog-menu__background" onClick={() => changeSRC("")}>
					</div>

					<div className="dialog-menu__content">
						<figure className="dialog-menu__image-holder">
							<img src={src} alt={alt}
								className="dialog-menu__image"></img>

							<figcaption className="dialog-menu__image-caption">
								{alt}
							</figcaption>
						</figure>

						<button className="dialog-menu__button download">Download</button>
						<button className="dialog-menu__button close"
							onClick={() => changeSRC("")}>Close Window</button>
					</div>
				</dialog >
			}
		</>
	)
}