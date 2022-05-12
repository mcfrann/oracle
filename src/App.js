import './App.css'
import { useState } from 'react'
import Form from './Components/Form/Form.js'

const App = () => {
  // const [currentQuestion, setCurrentQuestions] = useState(['You: '])
  // const [currentAnswer, setCurrentAnswer] = useState(['Oracle Oliver: '])
  const [converstion, setConversation] = useState([
    {
      You: '',
      'Oracle Oliver': ''
    }
  ])

  return (
    <div className='App'>
      <h1>Oracle Oliver</h1>
      <Form />
    </div>
  )
}

export default App
