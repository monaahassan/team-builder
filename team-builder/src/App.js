import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import Axios from 'axois';
import './App.css';

// 👉 the shape of the state that drives the form
const initialFormValues = {
  ///// TEXT INPUTS /////
  username: "",
  email: "",
  ///// DROPDOWN /////
  role: "",
};

export default function App() {
  const [member, setMembers] = useState([]); // careful what you initialize your state to

  // 🔥 STEP 1 - WE NEED STATE TO HOLD ALL VALUES OF THE FORM!
  const [formValues, setFormValues] = useState(initialFormValues);
  // fix this using the state hook

  const updateForm = (inputName, inputValue) => {
    // 🔥 STEP 8 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
    //  It takes in the name of an input and its value, and updates `formValues`
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    // 🔥 STEP 9 - IMPLEMENT a submit function which will be used inside the form's own `onSubmit`
    //  a) make a new member object, trimming whitespace from username and email
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    //  b) prevent further action if either username or email or role is empty string after trimming
    if (!newMember.username || !newMember.email || !newMember.role) return;
    //  c) POST new member to backend, and on success update the list of member in state with the new member from API
    axios
      .post("fakeapi.com", newMember)
      .then((res) => {
        setMember([newMember, ...member]); // equivalent of using .concat method (index.js)
        //  d) also on success clear the form
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        debugger;
      });
  };

  useEffect(() => {
    axios.get("fakeapi.com").then((res) => setMember(res.data));
  }, []);

  return (
    <div className="container">
      <h1>Form App</h1>

      <MemberForm
        // 🔥 STEP 2 - The form component needs its props.
        //  Check implementation of MemberForm
        //  to see what props it expects.
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {members.map((member) => {
        return <Member key={member.id} details={member} />;
      })}
    </div>
  );
}







// const initialFormValues = {
//   username: "", 
//   email: "",
//   role: "", 
// };

// //memberToEdit
// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
