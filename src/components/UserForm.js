import { useState } from "react";
import "../cssFiles/userCssFiles/UserForm.css";


const UserForm = ({users, postUser, onJoin, selectUser}) => {

    const [newUser, setNewUser] = useState({name: "", masterList: []});
    const [message, setMessage] = useState("");

    const handleFormSubmit = (event) => {
      event.preventDefault()
      if(newUser.name === "" ){
        setMessage("Please enter a username");
      } else if (users.findIndex((user) => user.name === newUser.name) < 0) {
        postUser(newUser);
        console.log("user added")
        setMessage("User has been successfully created. You can now Log in!");
      } else {
        console.log("user already exists");
        setMessage("User already exists. Please enter a different username.");
      }
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
        <div className="message">{message}</div>
      </div>
    );
  };
      
 
export default UserForm;