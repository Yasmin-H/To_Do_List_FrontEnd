import { useState } from 'react';
import ItemContainer from './containers/ItemContainer';
import ToDoContainer from './containers/ToDoContainer';
import UserContainer from './containers/UserContainer';


function App() {

  const [container, setContainer ] = useState({user:true, toDo:false, item:false});
  const [currentUser, setCurrentUser] = useState(null);

  const renderedContainer = () => {
    return container.user ? <UserContainer onJoin={() => setContainer({user:false, toDo:true, item:false})} selectUser={(userId) => setCurrentUser(userId)}/>
          : container.toDo ? <ToDoContainer  onEdit={() => setContainer({user:false, toDo:false, item:true})} onLogout={() => setContainer({user:true, toDo:false, item:false})} currentUser={currentUser}/>
          : container.item ? <ItemContainer onSave={() => setContainer({user:false, toDo:true, item:false})}/>
          : null;
  }

  return (
    <div class="background">
    <h1>To Do List</h1>
    {renderedContainer()}
    </div>
    
  );
}

export default App;