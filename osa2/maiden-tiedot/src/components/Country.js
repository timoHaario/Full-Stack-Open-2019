import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ country }) => {
	const name = country.name
	const capital = country.capital
	const population = country.population
	const languages = country.languages
	const flagURL = country.flag
	const [capitalWeather, setWeather] = useState({})
	const [loading, setLoading] = useState(true)

	const url =
		'http://api.weatherstack.com/current?access_key=e6c531eac6c6aa28b29318029f6c3212&query='

	useEffect(() => {
		axios.get(url + country.capital).then(response => {
			setWeather(response.data)
			setLoading(false)
		})
	}, [country.capital])
	return (
		<div>
			<h2>{name}</h2>
			<p>capital {capital}</p>
			<p>population {population}</p>
			<h3>languages</h3>
			<ul>
				{languages.map(language => (
					<p key={language.name}>{language.name}</p>
				))}
			</ul>
			<img style={{ width: 200 }} src={flagURL} alt="Flag" />
			{!loading && (
				<>
					<h3>{`Weather in ${capital}`}</h3>
					<p>{`temperature: ${capitalWeather.current.temperature} Celsius`}</p>
					<img
						style={{ width: 80 }}
						src={capitalWeather.current.weather_icons[0]}
						alt="Flag"
					/>
					<p>{`wind: ${capitalWeather.current.wind_speed} kph direction ${capitalWeather.current.wind_dir}`}</p>
				</>
			)}
		</div>
	)
}

export default Country
