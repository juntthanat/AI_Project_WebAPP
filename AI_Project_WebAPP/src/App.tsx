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
          <div id="input-container-header">
            <div id="left-input">
              <form>
                <input className="user-input" type="text"></input>
                <input className="user-input" type="text"></input>
                <input className="user-input" type="text"></input>
                <input className="user-input" type="text"></input>
              </form>
            </div>
            <div id="right-input">
              <form>
                <input className="user-input" type="text" placeholder='Target'></input>
              </form>
            </div>
          </div>
          <div id="input-container-footer">
            <form>
              <input id="submit-user-input" type="button" value="Submit"></input>
            </form>
          </div>
        </div>
        <div id="game-container-footer"></div>
      </div>
    </div>
  )
}

export default App
