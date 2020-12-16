import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


import React, { useState } from "react";
import { render } from "react-dom";
// 👉 App contains a more sophisticated form we'll flesh out later
import App from "./components/App";

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: "Fido", petType: "dog" },
  { petName: "Tweetie", petType: "canary" },
  { petName: "Goldie", petType: "fish" },
];

const initialValues = { petName: "", petType: "" };

function SimpleForm() {
  // the state
  const [pets, setPets] = useState(petsList);
  const [formValues, setFormValues] = useState(initialValues);

  const change = (evt) => {
    const { name, value }
    debugger;
  };
  const submit = (evt) => {};

  return (
    <div className="container">
      <h1>Simple Form</h1>
      {pets.map((pet, idx) => {
        return (
          <div key={idx}>
            {pet.petName} is a {pet.petType}
          </div>
        );
      })}
      <form onSubmit={submit}>
        <input
          name="petName"
          type="text"
          value={formValues.petName}
          onChange={change}
        ></input>
        <input
          name="petType"
          type="text"
          value={formValues.petType}
          onChange={change}
        ></input>
        <button>submit</button>
      </form>
    </div>
  );
}

render(
  <>
    <SimpleForm />
    {/* <App /> */}
  </>,
  document.querySelector("#root")
);
