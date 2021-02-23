import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setNewFilter] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);

  const addPerson = (name, number) => {
    const newPerson = { name: name, number: number };
    personService.create(newPerson).then((response) => {
      setPersons(persons.concat(response));
      setNewName("");
      setNewNumber("");
      fireMessage(`Lisätty ${name}`);
    });
  };

  const fireMessage = (message) => {
    setNotificationMessage(message);
    setTimeout(() => {
      setNotificationMessage(null);
    }, 5000);
  };

  const updatePerson = (name, number) => {
    const id = persons.filter((person) => person.name === name)[0].id;
    const person = { name: name, number: number, id: id };
    personService.update(id, person).then((response) => {
      const newPersons = persons.map((person) => {
        return {
          ...person,
          number:
            person.name === response.name ? response.number : person.number,
        };
      });
      setPersons(newPersons);
    });
    fireMessage(`Henkilön ${name} tiedot päivitetty`);
  };

  const personExists = (name) => {
    return persons.find((person) => person.name === name);
  };

  const submitPerson = (event) => {
    event.preventDefault();
    personExists(newName)
      ? updatePerson(newName, newNumber)
      : addPerson(newName, newNumber);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const handleDelete = (persons, id) => {
    personService.del(persons, id).then((response) => {
      setPersons(response);
    });
    fireMessage(
      `Poistettu ${persons.filter((person) => person.id === id)[0].name}`
    );
  };

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  return (
    <div>
      <h2>Puhelinluettelo</h2>

      <Notification message={notificationMessage} />

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

      <Persons persons={persons} filter={filter} handleDelete={handleDelete} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
