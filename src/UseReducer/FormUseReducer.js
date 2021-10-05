import React, { useReducer, useState } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Model from "./Model";
import Form from "react-bootstrap/Form";
import validator from "validator";

const FormUseReducer = () => {
  const initialState = {
    people: [],
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
  };
  const reducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
      debugger;
      return {
        ...state,
        people: [...state.people, action.payload],
      };
    }
    if (action.type === "EMPTY_VALUES") {
      return {
        ...state,
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
      };
    }
    if (action.type === "Handle INPUT TEXT") {
      return { ...state, [action.field]: action.payload };
    }
    if (action.type === "REMOVE_VALUES") {
      debugger;
      const newPeople = JSON.parse(JSON.stringify(state.people)).filter(
        (item) => item.id !== action.payload
      );
      return { ...state, people: newPeople };
    }
    if (action.type === "EDIT_VALUES") {
      debugger;
      const newPeople = JSON.parse(JSON.stringify(state.people)).find(
        (item) => item.id === action.payload
      );
      newPeople && setUpdateButton("Update Record");
      return {
        ...state,
        id: action.payload,
        firstname: newPeople.firstname,
        lastname: newPeople.lastname,
        email: newPeople.email,
        phonenumber: newPeople.phonenumber,
      };
    }
    if (action.type === "UPDATE_ITEM") {
      debugger;
      state.people.find((item) => item.id === action.payload.id).firstname =
        action.payload.firstname;
      state.people.find((item) => item.id === action.payload.id).lastname =
        action.payload.lastname;
      state.people.find((item) => item.id === action.payload.id).email =
        action.payload.email;
      state.people.find((item) => item.id === action.payload.id).phonenumber =
        action.payload.phonenumber;
      //   const updatePeople = JSON.parse(JSON.stringify(state.people)).find(
      //     (item) => item.id === action.payload.id
      //   );
      //   updatePeople.firstname = action.payload.firstname;
      //   updatePeople.lastname = action.payload.lastname;
      //   updatePeople.email = action.payload.email;
      //   updatePeople.phonenumber = action.payload.phonenumber;

      setUpdateButton("Add Record");
      return {
        ...state,
        people: state.people,
        id: "",
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
      };
    }
    return state;
  };
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [buttonDisable, setButtonDisable] = useState(false);
  const handleTextChanged = (e) => {
    if (e.target.name === "email") {
      var email = e.target.value;

      if (!validator.isEmail(email)) {
        setEmailError("Enter valid Email!");
        setButtonDisable(true);
      } else {
        setEmailError("");
        setButtonDisable(false);
      }
    }
    if (e.target.name === "phonenumber") {
      var phonenumber = e.target.value;

      if (!validator.isMobilePhone(phonenumber)) {
        setPhoneError("Enter valid Phone Number!");
        setButtonDisable(true);
      } else {
        setPhoneError("");
        setButtonDisable(false);
      }
    }
    console.log(e.target.name, e.target.value);
    dispach({
      type: "Handle INPUT TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  };
  const [updateButton, setUpdateButton] = useState("Add Record");
  const [state, dispach] = useReducer(reducer, initialState);
  const addNewItem = () => {
    let { firstname, lastname, email, phonenumber } = state;
    // state.people.push({
    //   id: new Date().getTime().toString(),
    //   firstname,
    //   lastname,
    //   email,
    //   phonenumber,
    // });
    // this.state.cart.push(this.state.input); // same as above, though bad practice
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    if (state.id) {
      dispach({
        type: "UPDATE_ITEM",
        payload: {
          id: state.id,
          firstname: state.firstname,
          lastname: state.lastname,
          email: state.email,
          phonenumber: state.phonenumber,
        },
      });
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        firstname: state.firstname,
        lastname: state.lastname,
        email: state.email,
        phonenumber: state.phonenumber,
      };
      dispach({ type: "ADD_ITEM", payload: newItem });
      dispach({ type: "EMPTY_VALUES" });
      console.log(state.people);
    }
  };
  //   const handleClick = (id) => {
  //     debugger;
  //     dispach({ type: "REMOVE_VALUES", payload: id });
  //   };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group style={{ width: "50%" }}>
          <Form.Label>FirstName</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            value={state.firstname}
            name="firstname"
            onChange={(e) => {
              handleTextChanged(e);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group style={{ width: "50%" }}>
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            value={state.lastname}
            name="lastname"
            onChange={(e) => {
              handleTextChanged(e);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group style={{ width: "50%" }}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            name="email"
            value={state.email}
            onChange={(e) => {
              handleTextChanged(e);
            }}
          ></Form.Control>
          <span
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            {emailError}
          </span>
        </Form.Group>
        <Form.Group style={{ width: "50%" }}>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            value={state.phonenumber}
            name="phonenumber"
            onChange={(e) => {
              handleTextChanged(e);
            }}
          ></Form.Control>
          <span
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            {phoneError}
          </span>
        </Form.Group>
        <Button disabled={buttonDisable} variant="success" type="submit">
          {updateButton}
        </Button>
      </Form>
      <br></br>
      <hr></hr>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {state.people.map(
            (person) =>
              person.firstname && (
                <tr>
                  <td key={person.id}>{person.id}</td>
                  <td>{person.firstname}</td>
                  <td>{person.lastname}</td>
                  <td>{person.email}</td>
                  <td>{person.phonenumber}</td>
                  <td>
                    <Button
                      variant="success"
                      onClick={() => {
                        dispach({ type: "EDIT_VALUES", payload: person.id });
                      }}
                    >
                      Update
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        dispach({ type: "REMOVE_VALUES", payload: person.id });
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </Table>
    </>
  );
};

export default FormUseReducer;
