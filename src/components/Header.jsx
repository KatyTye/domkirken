import { GiChurch } from "react-icons/gi"
import { Link, NavLink } from "react-router"

export default function Header() {

	return (
		<header className="top-content">
			<Link to={"/"} className="top-content__title">
				<GiChurch className="top-content__title-logo" />
				<span className="top-content__title-span">
					Roskilde Domkirke
				</span>
			</Link>

			<nav className="top-content__navigation">
				<NavLink to={"/"} className="top-content__navigation-redirect" >
					Forside
				</NavLink>
				<NavLink to={"/images"} className="top-content__navigation-redirect" >
					Billeder
				</NavLink>
				<NavLink to={"/info"} className="top-content__navigation-redirect">
					Information
				</NavLink>
			</nav>
		</header>
	)
}

export {
	Header
}