import './App.css'
import { useState } from 'react'
import { postQuestion } from './apiPrompt'
import Form from './Components/Form/Form'
import QuestionContainer from './Components/QuestionContainer/QuestionContainer'

const App = () => {
  const [question, setQuestion] = useState('')
  const [error, setError] = useState('')
  const [conversation, setConversation] = useState([
    {
      id: '',
      you: '',
      oracle: ''
    }
  ])

  const updateQuestion = (e) => {
    setQuestion((prevState) => e.target.value)
  }

  const submitQuestion = (e) => {
    e.preventDefault(e)
    validate()
    postQuestion(question)
      .then((response) => {
        if (!response.ok) {
          setError((prevState) => 'Uh oh. Please try another question.')
          alert(error)
        } else {
          return response.json()
        }
      })
      .then((answer) => {
        const questionAnswer = {
          id: Date.now(),
          you: question,
          oracle: answer.choices[0].text
        }
        setConversation((prevState) => [questionAnswer, ...conversation])
        clearInput()
      })
  }

  const clearInput = () => {
    setQuestion((prevState) => '')
  }

  const validate = () => {
    !question && alert('Please enter a question.')
  }

  return (
    <main className='App'>
      <section className='form-container'>
        <Form
          updateQuestion={updateQuestion}
          submitQuestion={submitQuestion}
          value={question}
        />
        <QuestionContainer conversation={conversation} />
      </section>
    </main>
  )
}

export default App
