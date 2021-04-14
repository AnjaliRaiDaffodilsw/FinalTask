import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { useSelector } from "react-redux";
//import useHistory, {Link} from 'use-history'
import Pagination from './Pagination/FirstComponents';

import "./Logout.css";
import FirstComponents from './Pagination/FirstComponents';
import './index.css';

function User() {
 
  const logout = (event) => {
    //  event.preventDefault();
  
  };
  const notes = (event) => {
    alert("Your details are below");
  
  };

  const taskobj = useSelector((state) => state.todos.data);
  
  return (
    <>
    <div className = "todo_style">
    <span>
   
   <h1><strong>Welcome user</strong></h1>
    <h1>Redux - TodoList, Total tasks remained: {taskobj.length}</h1>
      <AddTodo />
      <TodoList />
      <button className="logout__button" onClick={(e) => notes(e)}>
        Show the Notes here
      </button>
     <a href = "/" ><button className="logout__button" onClick={(e) => logout(e)}>
        Log out
      </button> </a>
      </span>
     
    </div>
    <Pagination />
    </>
  );
}

export default User;