import './Form.css'

const Form = ({ updateQuestion, submitQuestion, value }) => {
  return (
    <form className='question-form fade-in-top' onSubmit={submitQuestion}>
      <label htmlFor='questionBox' className='label'>
        Have a Question?
      </label>
      <input
        type='text'
        // name='question'
        id='questionBox'
        value={value}
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
