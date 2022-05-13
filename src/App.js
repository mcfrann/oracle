import './App.css'
import { useState } from 'react'
import Form from './Components/Form/Form'
import QuestionContainer from './Components/QuestionContainer/QuestionContainer'
import { postQuestion } from './apiPrompt'
import oliverIMG from './images/oracle-oliver.png'

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
      <header>
        <h1 className='title'>Oracle Oliver</h1>
        <img src={oliverIMG} alt='Oracle Oliver image' className='oliverImg' />
      </header>
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
