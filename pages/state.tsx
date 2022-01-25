import React, { useState } from "react";

const person = [
  {
    name: "Asisa",
    age: "22",
  },
  {
    name: "Anisa",
    age: "21",
  },
];


export default function Persons() {
  const [persons, setPersons] = useState(
    person.map((person) => {
      return (
        <>
          <p>
            {person.name}, {person.age}
          </p>
        </>
      );
    })
  );

  const updateByName = (persons) => {
      console.log(persons, "is name");
  setPersons(persons.name)
  };
  

  return (
    <div>
      <header>
        <p>{persons}</p>
      </header>

      {person.map((p) => {
        return <button className="m-4 p-4 bg-red-100" onClick={() => updateByName(p)}>{p.name}</button>;
      })}
      <button className="m-4 p-4 bg-red-100" >All</button>
    </div>
  );
}
