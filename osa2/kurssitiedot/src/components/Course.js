import React from 'react'

const Header = props => <h1>{props.course}</h1>

const Total = ({ parts }) => {
	const total = parts.map(part => part.exercises).reduce((sum, x) => sum + x)
	return <p>yhteensä {total} tehtävää</p>
}

const Part = props => (
	<p>
		{props.part.name} {props.part.exercises}
	</p>
)

const Content = ({ parts }) => (
	<div>
		{parts.map(part => (
			<Part part={part} />
		))}
	</div>
)

const Course = ({ course }) => (
	<div>
		<Header course={course.name} />
		<Content parts={course.parts} />
		<Total parts={course.parts} />
	</div>
)

export default Course
