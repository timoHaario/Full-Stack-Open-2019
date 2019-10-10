import React from 'react'

const Filter = ({ filter, handleFilterChange }) => (
	<p>
		rajaa näytettäviä
		<input value={filter} onChange={handleFilterChange} />
	</p>
)

export default Filter
