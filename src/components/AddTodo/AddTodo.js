import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions";
import cuid from "cuid";
import './AddTodo.css';

const AddTodo = () => {
  const [tasks, setTasks] = useState("");
  const dispatch = useDispatch();
  function handleInputChange(e) {
    setTasks(e.target.value);
    console.log(tasks);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch(addTodo({ task: tasks, id: cuid() }));
    e.target.userInput.value = "";
    console.log(tasks);
  }
  return (
    
    <form onSubmit={handleFormSubmit}>
    <div className = "main_div">
            <div className = "center_div">
                <br/>
                <h1> ToDo List</h1>
                <br/>
                <input type ="text" 
                placeholder = "Add iterms"
        name='userInput'
        onChange={(e) => handleInputChange(e)}
      />
      <button type='submit'><b>+</b></button>
      </div>
      </div>
    </form>
  );
};

export default AddTodo;
