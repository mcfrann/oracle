import QuestionTile from '../QuestionTile/QuestionTile'
import './QuestionContainer.css'
import PropTypes from 'prop-types'

const QuestionContainer = ({ conversation }) => {
  let counter = 0
  const questions = conversation.map((convo) => {
    if (convo.you && convo.oracleOliver) {
      counter += 1
      return (
        <QuestionTile
          id={convo.id}
          key={convo.id}
          question={convo.you}
          answer={convo.oracleOliver}
        />
      )
    }
  })

  return (
    <section className='question-container'>
      {questions}
      <div
        className='gradient-scroll'
        style={{ display: counter < 2 ? 'none' : 'block' }}
      ></div>
    </section>
  )
}

export default QuestionContainer

QuestionContainer.propTypes = {
  conversation: PropTypes.array
}
