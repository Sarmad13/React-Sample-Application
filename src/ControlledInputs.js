import React, { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    if (firstName && email) {
      console.log("if(firstName && email)");
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setName("");
      setEmail("");
    } else {
      console.log("Empty Values");
    }
    e.preventDefault();
    console.log(firstName, email);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">submit</button>
        </div>
      </form>
      {people &&
        people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h1>{firstName}</h1>
              <h1>{email} </h1>
            </div>
          );
        })}
    </>
  );
};

export default ControlledInputs;
