'use client'

import { useState } from "react"
import styles from './styles/styles.module.css'
let id=0
type ToDoList={
  id:number,
  text:string,
}
export const addTest = (num1:number,num2:number) => {
    return(num1+ num2);
  };
const ToDoList=()=>{
    const [todoText,setToDoText]=useState('')
    const [todoList,setToDoList]=useState<ToDoList[]>([])

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    const add = () => {
      setResult(num1 + num2);
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setToDoText(e.target.value)
    }
   
    const handleClick=()=>{
        console.log(todoText)
        setToDoList([...todoList,{id:id++,text:todoText}]);
        setToDoText('')
    }
    const handleRemove=()=>{
        setToDoList([...todoList]);
    }
    
    async function fetchMovies(){
       console.log( await fetch("https://catfact.ninja/fact"))
    }
    const handleGetData=()=>{
        console.log('handleGetData clicked',{mode:'no-cors'})
        fetchMovies();
    }
    return <div>
 <div className={styles.result} data-testid="result">
        {result}
      </div>
      <button onClick={handleGetData}>Get data</button>
      <input
        type="number"
        className={styles.input}
        data-testid="num1"
        value={num1}
        onChange={(e) => setNum1(parseInt( e.target.value))}
      />
      <input
        type="number"
        className={styles.input}
        data-testid="num2"
        value={num2}
        onChange={(e) => setNum2(parseInt(e.target.value))}
      />
      <button onClick={add} className={styles.button} data-testid="add">
        Add
      </button>

        <input onChange={handleChange} value={todoText} style={{color:'black'}} data-testid="todoText"></input>
        <button onClick={handleClick}>Add</button>
        <ol>{todoList.map((i)=>
        <li key={i.id}>{i.text}
        <button onClick={(j)=>{
            setToDoList(todoList.filter(t=>t.id!=i.id))
        }}>Remove</button>
        </li>
        )}</ol>
        </div>
}

export default ToDoList
