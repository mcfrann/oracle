import { useState } from 'react'

const Form = () => {
  const [currentQuestion, setCurrentQuestion] = useState('')

  const updateQuestion = (e) => {
    setCurrentQuestion(e.target.value)
  }

  return (
    <form className='questionForm'>
      <input
        type='text'
        name='question'
        value={currentQuestion}
        className='questionBox'
        onChange={updateQuestion}
      />
      <input
        type='submit'
        value='Ask Oracle Oliver'
        className='submitQuestion'
      />
    </form>
  )
}

export default Form
