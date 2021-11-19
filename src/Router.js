import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom'
import Character from './pages/Character'
import Characters from './pages/Characters'

const Home = () => <h1>Home</h1>
const Layout = () => (
	<>
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/characters">Characters</Link>
				</li>
			</ul>
		</nav>
		<Outlet />
	</>
)

const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="characters" element={<Characters />}>
					<Route path=":id" element={<Character />} />
					<Route path="new" element={<h2>New</h2>} />
				</Route>
				<Route path="*" element={<h1>404</h1>} />
				<Route path="*" element={<h1>404</h1>} />
			</Route>
		</Routes>
	</BrowserRouter>
)

export default Router
