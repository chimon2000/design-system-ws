import React from 'react'
import logo from './logo.svg'
import './App.css'
import '@ds/components'
import Button from './components/Button'
import Checkbox from './components/Checkbox'
import { css } from 'emotion'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Welcome to React</h1>
      <div className={spaceClass}>
        <Button raised onClick={() => console.log('clicked')}>
          Ds Button
        </Button>
      </div>
      <div className={spaceClass}>
        <ds-button raised onClick={() => console.log('clicked')}>
          DS Button
        </ds-button>
      </div>

      <div>
        <label
          className={css`
            display: inline-flex;
            align-items: center;
          `}>
          <Checkbox /> Check me
        </label>
      </div>
    </div>
  )
}

export default App

const spaceClass = css`
  margin: 5px;
`
