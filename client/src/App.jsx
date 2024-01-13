import { Link } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <a href="/signup">signup</a>
    <a href="/login">login</a>
    <a href="/">Home</a>
{/* 
    <Link to="/signup">signup</Link>a
    <Link to="/login">login</Link>
    <Link to="/">Home</Link> */}
    </>
  )
}

export default App
