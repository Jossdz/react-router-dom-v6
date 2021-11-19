import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Character() {
	const [character, setCharacter] = useState({})
	const { id } = useParams()

	useEffect(() => {
		const getInfo = async () => {
			const { data } = await axios.get(
				`https://rickandmortyapi.com/api/character/${id}`
			)
			setCharacter(data)
		}

		getInfo()
	}, [id])

	return (
		<div>
			<h2>{character?.name}</h2>
			<h3>Status: {character?.status}</h3>
			<img src={character?.image} />
		</div>
	)
}

export default Character
