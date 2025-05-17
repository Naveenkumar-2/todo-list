
import { useEffect, useRef, useState } from 'react'
import TodoIcon from '../assets/todo_icon.png'
import TodoItem from './TodoItem.js'
export default function Todo(){
  const inputRef = useRef();
  const [todoList , setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")):[]);
  
  const add =()=>{

    const inputText = inputRef.current.value.trim();
    console.log(inputText)
    if (inputText === ''){
      return null;
    }

    const newTask = {

      id:Date.now(),
      text:inputText,
      isComplete :false,
    }

    setTodoList((prev)=> [...prev,newTask]);
    inputRef.current.value='';
  }


  const deleteTodo =(id) =>{
    setTodoList((prvTodos)=>{
      return prvTodos.filter((todo)=> todo.id !== id)
    })
  }

  const toggle =(id)=>{

    setTodoList((prevTodos)=>{
      return prevTodos.map((todo)=>{
        if(todo.id === id){
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
    })
  }

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todoList))
  },[todoList])

    return <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
          <div className="flex justify-center mt-3 gap-2">
            <img src={TodoIcon} className='h-[50px] ' alt=''></img>
            <h1 className="text-3xl font-sans font-semibold text-center mt-2">To-Do List</h1>
          </div>

          <div className='flex my-7 justify-center bg-gray-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-10 pl-6 pr-2 
            placeholder:text-slate-600' type='text' placeholder='Add your task' />
            <button onClick={add} className='bg-orange-500 rounded-full w-28 text-white cursor-pointer '>ADD +</button>
          </div>
         <div>
             {todoList.map((item, index)=>{
              return <TodoItem key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
             })}
         </div>
         
      

        
    </div>
}