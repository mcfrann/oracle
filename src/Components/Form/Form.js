const Form = ({ updateQuestion, submitQuestion, value }) => {
  return (
    <form className='questionForm'>
      <input
        type='text'
        name='question'
        value={value}
        className='questionBox'
        onChange={updateQuestion}
      />
      <input
        type='submit'
        value='Ask Oracle Oliver'
        className='submitQuestion'
        onClick={submitQuestion}
      />
    </form>
  )
}

export default Form
