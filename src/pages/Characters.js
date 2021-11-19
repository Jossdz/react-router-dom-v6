import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'

function Characters() {
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		const getCharacters = async () => {
			const { data } = await axios.get(
				'https://rickandmortyapi.com/api/character'
			)
			setCharacters(data.results)
		}
		getCharacters()
	}, [])

	return (
		<div>
			<h1>Characters</h1>
			{characters.map((char) => (
				<Link to={`/characters/${char.id}`}>{char.name}-</Link>
			))}

			<Outlet />
		</div>
	)
}

export default Characters
