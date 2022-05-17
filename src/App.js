import './App.css'
import { useState } from 'react'
import { postQuestion } from './apiPrompt'
import Form from './Components/Form/Form'
import QuestionContainer from './Components/QuestionContainer/QuestionContainer'

const App = () => {
  const [question, setQuestion] = useState('')
  const [conversation, setConversation] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const updateQuestion = (e) => {
    setQuestion(e.target.value)
  }

  const submitQuestion = (e) => {
    e.preventDefault(e)
    validate()
    postQuestion(question)
      .then((response) => {
        if (!response.ok) {
          alert('Uh oh. Please try another question.')
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
        setIsLoading(false)
        clearInput()
      })
  }

  const clearInput = () => {
    setQuestion('')
  }

  const validate = () => {
    !question ? alert('Please enter a question.') : setIsLoading(true)
  }

  return (
    <main className='App'>
      <section className='form-container'>
        <Form
          updateQuestion={updateQuestion}
          submitQuestion={submitQuestion}
          value={question}
        />
        <QuestionContainer conversation={conversation} isLoading={isLoading} />
      </section>
    </main>
  )
}

export default App
