
import React from "react"
import ReactDOM from "react-dom"
import About from "./components/About"
import HobbyContainer from "./components/HobbyContainer"
import Image from "./components/Image"
import Design from './components/Design.jsx'

function App() {
  return (
    <>
    <div className="profile">
      <Design/>
      <Image/>
      <About/>
      <HobbyContainer/>
    </div>
    </>
  )
}

export default App
