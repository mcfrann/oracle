import './App.css'
import { useState } from 'react'
import { postQuestion } from './apiPrompt'
import Form from './Components/Form/Form'
import QuestionContainer from './Components/QuestionContainer/QuestionContainer'

const App = () => {
  const [question, setQuestion] = useState('')
  const [conversation, setConversation] = useState([
    {
      id: '',
      you: '',
      oracleOliver: '',
      error: ''
    }
  ])

  const updateQuestion = (e) => {
    setQuestion((prevState) => e.target.value)
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
        clearInput()
      })
  }

  const clearInput = () => {
    setQuestion((prevState) => '')
  }

  return (
    <main className='App'>
      <section className='form-container'>
        <Form
          updateQuestion={updateQuestion}
          submitQuestion={(e) => submitQuestion(e)}
          value={question}
        />
        <QuestionContainer conversation={conversation} />
      </section>
    </main>
  )
}

export default App
