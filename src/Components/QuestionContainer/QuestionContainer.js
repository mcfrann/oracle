import QuestionTile from '../QuestionTile/QuestionTile'
import './QuestionContainer.css'
import PropTypes from 'prop-types'
import ReactLoading from 'react-loading'

const QuestionContainer = ({ conversation, isLoading }) => {
  let counter = 0

  const questions = conversation.map((convo) => {
    if (convo.you && convo.oracle) {
      counter += 1
      return (
        <QuestionTile
          id={convo.id}
          key={convo.id}
          question={convo.you}
          answer={convo.oracle}
        />
      )
    }
  })

  return (
    <section className='question-container'>
      {isLoading ? (
        <ReactLoading
          type='spinningBubbles'
          color='#D8BA85'
          className='loading-spinner'
        />
      ) : (
        questions
      )}
      <div
        className='gradient-scroll'
        style={{ display: counter < 2 ? 'none' : 'block' }}
      ></div>
    </section>
  )
}

export default QuestionContainer

QuestionContainer.propTypes = {
  conversation: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired
}
