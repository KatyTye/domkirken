
export default function Information() {

	return (
		<main className="main-content info-content">
			<section className="info-content__sec">
				<div className="info-content__div-img">
					<img src={"./Image1.jpg"} alt="a image of something" className="info-content__image"></img>
				</div>
				<article className="info-content__art">
					<h2 className="info-content__h2">
						Omvisning // Domkirkens lofter
					</h2>
					<p className="info-content__p">
						Kom med op i den imponerende tagkonstruktion bygget af 350 m3 tømmer med Domkirkens Domværker Ole.
					</p>
					<p className="info-content__p">
						På en omvisning kan du opleve håndværk i særklasse, hvis metoder og værktøj stort set ikke har ændret sig siden
						middelalderen. Mærk kobberet lagt af dygtige håndværkere efter strenge kvalitetskrav og dyk ned i detaljer som franske
						låse og skrå hageblade. Nyd duften af douglasgran og se spor efter branden i 1968. Gennem tagets vinduer kan man se ud over
						hele Roskilde og få nok byens bedste udsigt. Før turen på lofterne kan du sidde på bænken under de høje hvælvinger og nyde den
						gotiske katedral i teglsten.
					</p>
				</article>
			</section>
			<ul className="info-content__ul">
					<h3 className="info-content__h3">Praktisk:</h3>
					<li className="info-content__li">
						Pris: 200 kr. for omvisning og entré (Kom gerne og se kirken inden omvisningen).
					</li>
					<li className="info-content__li">
						Køb billet <a className="info-content__a" href="https://billetto.dk/e/omvisning-pa-domkirkens-lofter-billetter-1134414?utm_source=organiser&utm_medium=share&utm_campaign=copy_link&utm_content=1" target="_blank">her</a>
					</li>
					<li className="info-content__li">
						Turen tager 1,5 time.
					</li>
					<li className="info-content__li">
						Man skal være fyldt 13 år og være godt til bens.
					</li>
				</ul>
		</main>
	)
}