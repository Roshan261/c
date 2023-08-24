// import task from "../../../s/model/Task"

import { useEffect, useState } from "react";
// import updateTask from '../redux/actions'
import { updateTask } from "../redux/actions";
// import { toggleTask } from "../redux/actions";
// import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions";
import { useDispatch } from "react-redux";
import axios from "axios";
// ... other imports
const API_URL = "http://localhost:8000";
const Task = ({ task }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.data);

  const dispatch = useDispatch(); // Get the dispatch function from Redux

  const onFormSubmit = (e) => {
    e.preventDefault();

    // Dispatch the action using the dispatch function
    dispatch(updateTask(task._id, text));
    console.log(text, task._id);
    setEditing((prevState) => !prevState);
    window.location.reload();
  };

  // ... rest of the component code

  return (
    <li className="task">
      <span style={{ display: editing ? "none" : "" }}>{task.data}</span>

      <form
        style={{ display: editing ? "inline" : "none" }}
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={text}
          className="edit-task"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <span onClick={()=>dispatch(deleteTask(task._id))} className="btn">
        <button>delete</button>
      </span>
      <span
        className="btn"
        onClick={() => setEditing((prevState) => !prevState)}
      >
        <button type="submit">{editing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
};
export default Task;
