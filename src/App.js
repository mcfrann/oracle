import './App.css'
import { useState } from 'react'
import Form from './Components/Form/Form'
import QuestionContainer from './Components/QuestionContainer/QuestionContainer'
import { postQuestion } from './apiPrompt'

const App = () => {
  const [conversation, setConversation] = useState([
    {
      id: '',
      you: '',
      oracleOliver: '',
      error: ''
    }
  ])
  // let questionPrompt = conversation[0].you

  const updateQuestion = (e) => {
    setConversation([
      {
        id: '',
        you: e.target.value,
        oracleOliver: '',
        error: ''
      }
    ])
  }

  const submitQuestion = (e) => {
    e.preventDefault(e)
    postQuestion(conversation[0].you)
      .then((response) => response.json())
      .then((answer) => {
        const questionAnswer = {
          id: Date.now(),
          you: conversation[0].you,
          oracleOliver: answer,
          error: ''
        }
        setConversation((prevQuestionAnswer) => questionAnswer)
      })
    // .catch((error) => setConversation((prevError) => conversation[0].error))
  }

  return (
    <div className='App'>
      <h1>Oracle Oliver</h1>
      <Form
        updateQuestion={updateQuestion}
        submitQuestion={submitQuestion}
        value={conversation[0].you}
      />
      <QuestionContainer conversation={conversation} />
    </div>
  )
}

export default App
