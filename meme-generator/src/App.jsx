import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Meme from '../components/Meme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Meme />
     
    </>
  )
}

export default App
