import { useState } from "react";
import "../cssFiles/userCssFiles/UserLoginForm.css";


const UserLoginForm = ({users, onJoin, selectUser}) => {

    const [oldUser, setOldUser] = useState({name: "", masterList: []});

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const user = users.find((user) => user.name === oldUser.name);
        if(user){
            console.log("user found")
            selectUser(user)
            onJoin();
        } else{
            console.log("user does not exist");
        }
    }


    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedUser = {...oldUser};
        copiedUser[propertyName]= event.target.value;
        setOldUser(copiedUser);

    }


    // return ( 
    //     <>
    //     <form id= "login" onSubmit={handleFormSubmit}>
    //         <input 
    //         type="text"
    //         placeholder="enter name..."
    //         value={oldUser.name}
    //         name="name"
    //         onChange={handleChange}/>
    //         <button type="submit">Login</button>

    //     </form>
        
    //     </>
    //  );



    // return ( 
    //     <div className="user-login-form">
    //       <form id="login" onSubmit={handleFormSubmit}>
    //         <input 
    //           type="text"
    //           placeholder="enter name..."
    //           value={oldUser.name}
    //           name="name"
    //           onChange={handleChange}
    //         />
    //         <button type="submit">Login</button>
    //       </form>
    //     </div>
    //   );

    return (
      <div className="user-login-form">
        <form id="login" onSubmit={handleFormSubmit}>
          <div className="user-form-container">
            <input
              type="text"
              placeholder="enter name..."
              value={oldUser.name}
              name="name"
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
    
}
 
export default UserLoginForm;