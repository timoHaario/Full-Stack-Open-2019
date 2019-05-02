import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return(
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return(
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return(
    <>
        <p>yhteensä {props.parts.map(part => Number(part.exercises)).reduce(reducer)} tehtävää</p>
    </>
    )
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))