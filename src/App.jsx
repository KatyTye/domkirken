import { createBrowserRouter, RouterProvider } from "react-router"
import Information from "./pages/Information"
import Layout from "./pages/Layout"
import Images from "./pages/Images"
import Main from "./pages/Main"

export default function App() {

	const browserRouter = createBrowserRouter([
		{
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Main />
				},
				{
					path: "/info",
					element: <Information />
				},
				{
					path: "/images",
					element: <Images />
				}
			]
		}
	])

	return (
		<RouterProvider router={browserRouter} />
	)
}