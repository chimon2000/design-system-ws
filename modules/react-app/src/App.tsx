import React from 'react'
import logo from './logo.svg'
import './App.css'
import '@ds/components'

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
            <ds-button raised onClick={() => console.log('clicked')}>
                DS Button
            </ds-button>
        </div>
    )
}

export default App
