import React, { useState } from 'react'
import Country from './Country'

const CountryListItem = ({ country }) => {
	const [fullViewVisible, setVisibility] = useState(false)
	const toggleVisibility = () => {
		setVisibility(!fullViewVisible)
	}
	return (
		<div>
			<p key={country.numericCode}>
				{country.name}
				<button onClick={toggleVisibility}>show</button>
			</p>
			{fullViewVisible ? <Country country={country} /> : ''}
		</div>
	)
}

export default CountryListItem
