import React from 'react'

const Persons = ({ persons, filter }) =>
	persons
		.filter(person =>
			person.name.toLowerCase().includes(filter.toLowerCase())
		)
		.map(person => (
			<p key={person.name}>
				{person.name} {person.number}
			</p>
		))

export default Persons
