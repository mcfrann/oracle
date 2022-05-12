import './App.css'
import { useState } from 'react'

const App = () => {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])

  return (
    <div className='App'>
      <h1>Oracle Oliver</h1>
    </div>
  )
}

export default App
