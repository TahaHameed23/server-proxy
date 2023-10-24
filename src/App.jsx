import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

useEffect(()=>{
  axios.get('http://localhost')
},[])
function App() {
  const [count, setCount] = useState([])

  return (
    <>
      <h1>React</h1>
      <p>COUNT: {count.length}</p>

      {
        count.map((jokes, index)=>{
          <div>
            <h3>{joke.title}</h3>
            <p>{jokes.content}</p>
          </div>
        })
      }
    </>
  )
}

export default App
