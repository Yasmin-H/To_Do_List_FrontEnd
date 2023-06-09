import { useState } from 'react';
import ItemContainer from './containers/ItemContainer';
import ToDoContainer from './containers/ToDoContainer';
import UserContainer from './containers/UserContainer';
import './cssFiles/App.css';

function App() {

  const [container, setContainer ] = useState({ user: true, toDo: false, item: false });
  const [currentUser, setCurrentUser] = useState(null);
  const [currentToDo, setCurrentToDo] = useState(null);

  const changeToTodo = () => setContainer({ user: false, toDo: true, item: false });
  const changeToUser = () => setContainer({ user: true, toDo: false, item: false });
  const changeToItem = () => setContainer({ user: false, toDo: false, item: true });

  const handleSelectUser = (user) => setCurrentUser(user);
  const handleSelectToDo = (toDo) => setCurrentToDo(toDo);

  const renderedContainer = () => {
    return container.user ? <UserContainer onJoin={changeToTodo} selectUser={handleSelectUser} currentUser={currentUser}/>
          : container.toDo ? <ToDoContainer  onEdit={changeToItem} onLogout={changeToUser} currentUser={currentUser} selectToDo={handleSelectToDo} />
          : container.item ? <ItemContainer onSave={changeToTodo} currentToDo={currentToDo}/>
          : null;
  }

  return (
    <div className="background">
    <h1>{container.item ? currentToDo.listName: "CheckMate☑" }</h1>
    {renderedContainer()}
    </div>
    
  );
}

export default App;