import './App.css'
import { useState } from 'react'
import Form from './Components/Form/Form'
import QuestionContainer from './Components/QuestionContainer/QuestionContainer'
import { postQuestion } from './apiPrompt'

const App = () => {
  const [question, setQuestion] = useState('')
  // const [answer, setAnswer] = useState('')
  const [conversation, setConversation] = useState([
    {
      id: '',
      you: '',
      oracleOliver: '',
      error: ''
    }
  ])

  const updateQuestion = (e) => {
    setQuestion(e.target.value)
  }

  const submitQuestion = (e) => {
    e.preventDefault(e)
    postQuestion(question)
      .then((response) => response.json())
      .then((answer) => {
        console.log(answer.choices[0].text)
        const questionAnswer = {
          id: Date.now(),
          you: question,
          oracleOliver: answer.choices[0].text,
          error: ''
        }
        setConversation((prevState) => [questionAnswer, ...conversation])
      })
  }

  return (
    <div className='App'>
      <h1>Oracle Oliver</h1>
      <Form
        updateQuestion={updateQuestion}
        submitQuestion={(e) => submitQuestion(e)}
        value={question}
      />
      <QuestionContainer conversation={conversation} />
    </div>
  )
}

export default App
