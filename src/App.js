import { useState } from 'react'
import Header from './Components/Common/Header'
import Home from './Pages/Home';
import Project from './Pages/Projects';
import { Routes,Route } from 'react-router'
import reactLogo from './assets/react.svg'
// import './App.css'

console.log = function() {};

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
