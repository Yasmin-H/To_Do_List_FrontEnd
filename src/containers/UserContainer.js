import { useEffect, useState } from "react";
import UserForm from "../components/UserForm";

const UserContainer = () => {

    const [users , setUsers] = useState([]);

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

    return (
        <>
        <p>Hello from UserContainer!</p> 
        <UserForm users={users} postUser={postUser}/>   
        </>

        );
}
 
export default UserContainer;