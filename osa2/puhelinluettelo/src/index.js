import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [filter, setNewFilter] = useState('')

	const addPerson = (name, number) => {
		setPersons(persons.concat({ name: name, number: number }))
		setNewName('')
		setNewNumber('')
	}

	const personExists = name => {
		return persons.find(person => person.name === name)
	}

	const submitPerson = event => {
		event.preventDefault()
		personExists(newName)
			? window.alert(`${newName} on jo luettelossa`)
			: addPerson(newName, newNumber)
	}

	const handleNameChange = event => {
		setNewName(event.target.value)
	}

	const handleNumberChange = event => {
		setNewNumber(event.target.value)
	}

	const handleFilterChange = event => {
		setNewFilter(event.target.value)
	}

	useEffect(() => {
		axios.get('http://localhost:3001/persons').then(response => {
			setPersons(response.data)
		})
	}, [])

	return (
		<div>
			<h2>Puhelinluettelo</h2>

			<Filter filter={filter} handleFilterChange={handleFilterChange} />

			<h3>lisää uusi</h3>

			<PersonForm
				submitPerson={submitPerson}
				newName={newName}
				handleNameChange={handleNameChange}
				newNumber={newNumber}
				handleNumberChange={handleNumberChange}
			/>

			<h3>Numerot</h3>

			<Persons persons={persons} filter={filter} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
