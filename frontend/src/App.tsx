import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [])

  return (
    <div style={{ padding: '50px' }}>
      <h1>Task Tracker</h1>
      <p>Backend says: <strong>{message}</strong></p>
    </div>
  )
}

export default App
