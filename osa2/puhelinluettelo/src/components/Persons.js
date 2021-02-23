import React from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Persons = ({ persons, filter, handleDelete }) =>
  persons
    .filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    )
    .map((person) => (
      <div key={person.id}>
        <span>
          {person.name} {person.number}
        </span>
        <Button
          text="delete"
          handleClick={() => handleDelete(persons, person.id)}
        />
        <br />
      </div>
    ));

export default Persons;
