import { useState } from "react";
import "../cssFiles/userCssFiles/UserForm.css";


const UserForm = ({users, postUser, onJoin, selectUser}) => {

    const [newUser, setNewUser] = useState({name: "", masterList: []});
    const [errorMessage, setErrorMessage] = useState("");


    const handleFormSubmit = (event) => {
      event.preventDefault()
      if(users.findIndex((user) => user.name === newUser.name) < 0){
        postUser(newUser);
        console.log("user added")
        selectUser(newUser)
        onJoin();
      } else {
        console.log("user already exists");
      // } alert("User already exists. Please enter a different username.");
      }setErrorMessage("User already exists. Please enter a different username.");
    }

    


    const handleChange = (event) => {
      let propertyName = event.target.name;
      let copiedUser = {...newUser};
      copiedUser[propertyName]= event.target.value;
      setNewUser(copiedUser);
    }

    return (
      <div className="user-form">
        <form onSubmit={handleFormSubmit}>
          <div className="form-container">
            <input
              type="text"
              placeholder="enter name..."
              value={newUser.name}
              name="name"
              onChange={handleChange}
            />
            <button type="submit">Join</button>
          </div>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    );
  };
      
 
export default UserForm;