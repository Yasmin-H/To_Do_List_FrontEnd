import { useState } from 'react';
import './App.css';
import ItemContainer from './containers/ItemContainer';
import ToDoContainer from './containers/ToDoContainer';
import UserContainer from './containers/UserContainer';

function App() {

  const [container, setContainer ] = useState({user:true, toDo:false, item:false});

  const renderedContainer = () => {
    return container.user ? <UserContainer />
          : container.toDo ? <ToDoContainer/>
          : container.item ? <ItemContainer/>
          : null;
  }

  return (
    <>
    <h1>To Do List</h1>
    <button>Login</button>
    {renderedContainer}
    </>
  );
}

export default App;
