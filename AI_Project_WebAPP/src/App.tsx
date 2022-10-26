import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="main">
      <div id="game-container">
        <div id="game-container-header">
          Game Title
        </div>
        <div id="game-container-body">
          <div id="input-container">
            
          </div>
        </div>
        <div id="game-container-footer"></div>
      </div>
    </div>
  )
}

export default App
