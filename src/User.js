import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { useSelector } from "react-redux";

import "./Logout.css";
import FirstComponents from './Pagination/FirstComponents';
import './index.css';

function User() {
 
  const logout = (event) => {
    //  event.preventDefault();
  
  };

  const taskobj = useSelector((state) => state.todos.data);
  return (
    <>
    <div className = "todo_style">
    <span>
  
   
    <h1>Redux - TodoList, Total tasks remained: {taskobj.length}</h1>
      <AddTodo />
      <TodoList />
      <button className="logout__button" onClick={(e) => logout(e)}>
      Toggle 
     
      </button>
     <a href = "/" ><button className="logout__button" onClick={(e) => logout(e)}>
        Log out
      </button> </a>
      </span>
     
    </div>
    </>
  );
}

export default User;