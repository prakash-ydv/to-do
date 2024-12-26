import React,{useState} from 'react'

function Task(Props) {
  const [isDone, setisDone] = useState(false)
  const [titleOfDot, settitleOfDot] = useState("Task Pending")

  // function to manage pending and completed task number
  function handleMarkDone (){
    if(!isDone){
      Props.completed()
    }else{
      alert("Task Already Done")
    }
    setisDone(true)
    settitleOfDot("Task Completed")
    
  }



  return (
    <div className='border-2 relative border-purple-900 flex p-2 px-4 flex-col items-start justify-around h-[210px] w-[200px] rounded-3xl shadow-2xl cursor-pointer text-white overflow-auto scrollbar-none '>
      <span title={titleOfDot} className={`h-3 w-3 rounded-full absolute top-4 right-4 ${
    isDone ? "bg-green-500" : "bg-red-500"
  }`} ></span><h1 className='font-semibold text-xl'>{Props.Title}</h1>
      <p className={isDone ? "line-through text-zinc-200 ":""}>{Props.Desc}</p>
      <div className='flex justify-between w-full'>
      <button onClick={handleMarkDone} className='mx-auto shadow-lg px-1 rounded-xl text-green-700 hover:text-white' >Done</button>
      <button className='mx-auto shadow-lg px-1 rounded-xl text-red-700 hover:text-white' >Delete</button>
      <button className='mx-auto shadow-lg px-1 rounded-xl text-orange-700 hover:text-white' >Edit</button>
      </div>
    </div>
  )
}

export default Task
