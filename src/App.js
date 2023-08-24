
import './App.css';
import Header from './components/Header';
import TaskManager from './components/TaskManager';
import Tasks from './components/Tasks';

function App() { 
  return (
    <div >
     <Header/> 
     <TaskManager/> 
     <Tasks/>
    </div>
  );
}

export default App;
