import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/main.sass"

export default function Layout() {

	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}