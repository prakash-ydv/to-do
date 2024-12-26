import React, { useState } from "react";
import TaskBox from "./components/TaskBox.jsx";
import "./App.css";

function App() {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [Tasks, setTask] = useState([]);
  const [isCompleted, setisCompleted] = useState(false);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [completedTasks, setcompletedTasks] = useState(0);

  function completedHandler(){
    setPendingTasks(pendingTasks-1)
    setcompletedTasks(completedTasks+1)
  }

  function submitHandler(e) {
    e.preventDefault();

    if (!Title) {
      alert("Enter Task First");
      return;
    }

    setTask([...Tasks, { Title, Desc, isCompleted }]);
    setPendingTasks(pendingTasks+1)
    setTitle("");
    setDesc("");
  }

  // function deleteHandler(index){
  //   console.log(index)
  // }

  

  return (
    <div className="h-screen w-screen bg-purple-100 p-5">
      <nav className="bg-purple-900 h-16 flex items-center justify-center text-white font-bold text-2xl rounded-xl">
        <h1>My TO-DO App</h1>
      </nav>

      <div className="main-container bg-purple-400 p-5 rounded-lg my-6 py-10 items-center justify-center flex">
        <form className="flex flex-col gap-4 items-center">
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="text-center"
            type="text"
            placeholder="Enter Task"
            value={Title}
            required
          />

          <input
            required
            onChange={(e) => setDesc(e.target.value)}
            className="h-16 text-center"
            type="text"
            placeholder="Enter Description of Task"
            value={Desc}
          />
          <button
            onClick={submitHandler}
            className="border-2 w-fit p-1 rounded-lg border-white hover:bg-purple-700 hover:text-white hover:border-black"
          >
            ADD TASK
          </button>
        </form>
      </div>

      <div className="task-container bg-purple-400 rounded-lg my-6 py-6 justify-center flex flex-wrap gap-5 ">
        {Tasks.length === 0 ? <p>No Task Found</p> : ""}

        {Tasks.length > 0 ? (
          <div className="w-full flex justify-between text-white font-semibold px-5">
            <p className="text-green-700">Completed Tasks: {completedTasks}</p>
            <p className="text-red-600">Pending Tasks: {pendingTasks}</p>
          </div>
        ) : (
          ""
        )}
        {Tasks.map((item, index) => (
          <TaskBox key={index} Title={item.Title} Desc={item.Desc} completed={completedHandler} delete={() => deleteHandler(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
