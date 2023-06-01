import { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import UserLoginForm from "../components/UserLoginForm";
import "../cssFiles/userCssFiles/UserContainer.css";


const UserContainer = ({onJoin, selectUser}) => {

    const [users , setUsers] = useState([]);

    const [login, setLogin] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("http://localhost:8080/users");
            const data = await response.json();
            setUsers(data);
        }
        fetchUsers()
    }, [])

    const postUser = async (newUser) => {
        const response = await fetch("http://localhost:8080/users", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        })
        const savedUser = await response.json();
        setUsers([...users, savedUser])
    }

    const loginClick = () => {
      setLogin(true);
    }

    const renderedForm = () => {
      return login ? <UserLoginForm users={users} onJoin={onJoin} selectUser={selectUser}/>
            :  <UserForm users={users} postUser={postUser} onJoin={onJoin} selectUser={selectUser}/> 
    }
    
    const renderLoginButton = () => {
        return !login ? <button className="login-button" onClick={loginClick}>Login</button>
            : null;
    }

    return (
        <>
        <div className="user-container">
        {renderLoginButton()}
        {renderedForm()}
        </div>
        </>
    );     
}
 
export default UserContainer;