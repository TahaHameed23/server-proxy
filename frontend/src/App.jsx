import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    //https://server-proxy-backend.vercel.app/
    .then((res)=>{
      setCount(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <>
      <h1>React</h1>
      <p>COUNT: {count.length}</p>

      {
        count.map((jokes, index)=>(
          <div key={index}>
            <h3>{jokes.title}</h3>
            <p>{jokes.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
