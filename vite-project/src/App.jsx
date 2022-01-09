import { useState } from 'react'
import logo from './logo.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>
    <div className="get">
    <h1>SVG Loading Images</h1>
    </div>

    <div className="App">
    
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <span>
        <img src="//unsplash.it/300/300"/>
        <img src="//unsplash.it/299/301"/>
        <img src="//unsplash.it/298/302"/>
        <img src="//unsplash.it/297/303"/>
        <img src="//unsplash.it/296/304"/></span><br/>
        <span>
        <img src="//unsplash.it/295/305"/>
        <img src="//unsplash.it/294/306"/>
        <img src="//unsplash.it/293/307"/>
        <img src="//unsplash.it/292/308"/>
        <img src="//unsplash.it/291/309"/></span><br/>
        <span>
        <img src="//unsplash.it/290/310"/>
        <img src="//unsplash.it/289/311"/>
        <img src="//unsplash.it/288/312"/>
        <img src="//unsplash.it/287/313"/>
        <img src="//unsplash.it/286/314"/></span><br/>
        <span>
        <img src="//unsplash.it/285/315"/>
        <img src="//unsplash.it/284/316"/>
        <img src="//unsplash.it/283/317"/>
        <img src="//unsplash.it/282/318"/>
        <img src="//unsplash.it/281/319"/></span><br/>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
    
    </>
  )
}

export default App
