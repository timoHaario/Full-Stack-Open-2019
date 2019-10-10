import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import Filter from './components/Filter'
import SearchResults from './components/SearchResults'

const filterResults = (filter, countries) => {
	if (filter === '') return []
	return countries.filter(country => {
		const c = country.name.toLowerCase()
		const f = filter.toLowerCase()
		return c.includes(f)
	})
}

const App = () => {
	const [filter, setNewFilter] = useState('')
	const [countries, setCountries] = useState([])

	useEffect(() => {
		axios.get('https://restcountries.eu/rest/v2/all').then(response => {
			setCountries(response.data)
		})
	}, [])

	const handleFilterChange = event => {
		setNewFilter(event.target.value)
	}
	return (
		<div>
			<Filter filter={filter} handleFilterChange={handleFilterChange} />
			<SearchResults countries={filterResults(filter, countries)} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
