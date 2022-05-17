import './Form.css'
import { useState } from 'react'
import { postQuestion } from '../../apiPrompt'
import PropTypes from 'prop-types'

const Form = ({ conversation, setConversation, setIsLoading }) => {
  const [question, setQuestion] = useState('')

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
    <form className='question-form fade-in-top' onSubmit={submitQuestion}>
      <label htmlFor='questionBox' className='label'>
        Have a Question?
      </label>
      <input
        type='text'
        id='questionBox'
        value={question}
        className='question-box'
        onChange={updateQuestion}
        autoFocus
      />
      <input
        type='submit'
        id='submit'
        value='Ask the Oracle'
        className='submit-question shadow-drop-center'
        onClick={submitQuestion}
      />
    </form>
  )
}

export default Form

Form.propTypes = {
  conversation: PropTypes.arrayOf(PropTypes.object).isRequired,
  setConversation: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired
}
