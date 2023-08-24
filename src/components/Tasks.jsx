import { useEffect, useState } from "react";

import { getAllTasks } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import axios from "axios";

const API_URL = "http://localhost:8000"
export const Tasks = () => {
  const[taskItem,setTaskItem] = useState([]);

  const getAllTasks =async ()=>{
      try {
        const res= await  axios.get(`${API_URL}/tasks`);
        setTaskItem(res.data); 
      } catch (error) {
        console.log('Error while calling getAllTasks API', error.message);
      }
  }
  // const dispatch = useDispatch();
  // const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <article>
      {taskItem ? (
        <ul style={{listStyle:"none"}}>
          {taskItem.map((task) => (
            <Task task={task} key={task._id} />
          ))}
        </ul>
      ) : (
        <p>Loading tasks...</p>
      )}
    </article>
  );
};

export default Tasks;
