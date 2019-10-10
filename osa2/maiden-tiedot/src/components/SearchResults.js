import React from 'react'
import Country from './Country'
import CountryListItem from './CountryListItem'

const SearchResults = ({ countries }) => {
	const hits = countries.length
	if (hits > 10) return <p>Too many matches, specify another filter</p>
	else if (hits > 1)
		return countries.map(country => (
			<CountryListItem key={country.numericCode} country={country} />
		))
	else if (hits === 1) return <Country country={countries[0]} />
	else if (hits === 0) return <div />
}

export default SearchResults
