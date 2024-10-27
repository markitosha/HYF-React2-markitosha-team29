import './App.css'

function App() {
  if (window.location.pathname === '/test') {
    return (<h1>Hello Test</h1>)
  }

  return (<h1>Hello Vite</h1>)
}

export default App
