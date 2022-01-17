import './App.css';
import AddTask from './component/AddTask';
import TaskList from './component/TaskList';

function App() {
  return (
    <div className="App">
      <div className='head'>
      <h1>Todo list</h1>
       <AddTask/>
       </div>
       <TaskList/>

    </div>
  );
}

export default App;
