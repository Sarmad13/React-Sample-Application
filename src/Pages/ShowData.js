import React, { useEffect, useMemo, useState } from "react";
import Table from "react-bootstrap/Table";
const ShowData = () => {
  const [person, setPerson] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const ApiCall = async () => {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    const arr = JSON.parse(JSON.stringify(data.data));
    console.log(arr);
    setPerson(arr);
    setIsLoading(false);
    console.log(person);
  };
  useEffect(() => {
    ApiCall();
  }, []);

  return (
    <>
      {isLoading ? (
        setTimeout(() => {
          <div>Loading...</div>;
        }, 3000)
      ) : (
        <Table striped bordered hover variant="light">
          <thead style={{ backgroundColor: "#ff0000" }}>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {person &&
              person.map((person) => (
                <tr>
                  <td key={person.id}>{person.id}</td>
                  <td>{person.email}</td>
                  <td>{person.first_name}</td>
                  <td>{person.last_name}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ShowData;
