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
      oracleOliver: ''
    }
  ])
  const questionPrompt = conversation[0].you

  const updateQuestion = (e) => {
    setConversation([
      {
        id: '',
        you: e.target.value,
        oracleOliver: ''
      }
    ])
  }

  const submitQuestion = (e) => {
    e.prevent.default(e)
    postQuestion(questionPrompt)
      .then((response) => response.json())
      .then((response) =>
        setConversation([
          {
            id: Date.now(),
            you: questionPrompt,
            oracleOliver: response
          },
          ...conversation
        ])
      )
  }

  return (
    <div className='App'>
      <h1>Oracle Oliver</h1>
      <Form
        updateQuestion={updateQuestion}
        submitQuestion={submitQuestion}
        value={questionPrompt}
      />
      <QuestionContainer conversation={conversation} />
    </div>
  )
}

export default App
