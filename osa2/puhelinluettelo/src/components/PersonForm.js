import React from 'react'

const PersonForm = ({
	submitPerson,
	newName,
	handleNameChange,
	newNumber,
	handleNumberChange
}) => (
	<form onSubmit={submitPerson}>
		<div>
			nimi: <input value={newName} onChange={handleNameChange} />
		</div>
		<div>
			numero: <input value={newNumber} onChange={handleNumberChange} />
		</div>
		<div>
			<button type="submit">lisää</button>
		</div>
	</form>
)

export default PersonForm
