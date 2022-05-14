import './QuestionTile.css'

const QuestionTile = ({ id, question, answer }) => {
  return (
    <section className='question-tile fade-in-fwd' id={id}>
      <div className='text-container'>
        <h1 className='you'>You: {question}</h1>
        <h1 className='oracleOliver'>Oracle:{answer}</h1>
      </div>
    </section>
  )
}

export default QuestionTile
