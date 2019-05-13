import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = props => (
	<button onClick={props.handleClick}>{props.text}</button>
)

const Statistic = ({ text, value }) => (
	<tr>
		<td>{text}</td>
		<td>{value}</td>
	</tr>
)

const Heading = ({ text }) => <h1>{text}</h1>

const mean = (sum, n) => sum / n

const positivityRatio = (positives, n) => (positives / n) * 100 + ' %'

const Statistics = ({ good, bad, neutral }) => {
	return good + bad + neutral > 0 ? (
		<table>
			<tbody>
				<Statistic text="hyvä" value={good} />
				<Statistic text="neutraali" value={neutral} />
				<Statistic text="huono" value={bad} />
				<Statistic text="yhteensä" value={good + neutral + bad} />
				<Statistic
					text="keskiarvo"
					value={mean(good - bad, good + neutral + bad)}
				/>
				<Statistic
					text="positiivisia"
					value={positivityRatio(
						good + neutral,
						good + neutral + bad
					)}
				/>
			</tbody>
		</table>
	) : (
		<p>Ei yhtään palautetta annettu</p>
	)
}

const App = () => {
	// tallenna napit omaan tilaansa
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	return (
		<div>
			<Heading text="anna palautetta" />

			<Button text="hyvä" handleClick={() => setGood(good + 1)} />
			<Button
				text="neutraali"
				handleClick={() => setNeutral(neutral + 1)}
			/>
			<Button text="huono" handleClick={() => setBad(bad + 1)} />

			<Heading text="statistiikka" />

			<Statistics good={good} bad={bad} neutral={neutral} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
