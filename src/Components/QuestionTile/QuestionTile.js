import './QuestionTile.css'

const QuestionTile = ({ id, question, answer }) => {
  return (
    <section className='questionTile' id={id}>
      <div className='text-container'>
        <h1 className='you'>You: </h1>
        <h1 className='question'>{question}</h1>
        <h1 className='oracleOliver'>Oracle Oliver:</h1>
        <h1 className='answer'>{answer}</h1>
      </div>
    </section>
  )
}

export default QuestionTile
