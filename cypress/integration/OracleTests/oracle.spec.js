describe('Oracle AI App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays form label', () => {
    cy.get('.label').contains('Have a Question?')
  })

  it('displays input field', () => {
    cy.get('.question-box').should('be.visible')
  })

  it('displays submit button', () => {
    cy.get('.submit-question').should('be.visible')
  })

  it("doesn't allow for submitting an empty field", () => {
    cy.get('.submit-question')
      .click()
      .get('.error-message')
      .contains('Please enter a question.')
  })

  it('submits question to the Oracle (API) and displays results underneath form', () => {
    cy.intercept(
      'POST',
      'https://api.openai.com/v1/engines/text-curie-001/completions',
      {
        response: 200,
        fixture: 'prompt.json'
      }
    ).as('askQuestion')

    cy.get('.question-box')
      .type('Is this a test?')
      .get('.submit-question')
      .click()

    cy.get('.question-container').should('have.descendants', '.question-tile')
  })

  it("displays error if fetch call doesn't work", () => {
    cy.intercept(
      'POST',
      'https://api.openai.com/v1/engines/text-curie-001/completions',
      {
        statusCode: 404
      }
    ).as('forceError')

    cy.get('.question-box')
      .type('Is this a test?')
      .get('.submit-question')
      .click()

    cy.wait('@forceError')
      .get('form')
      .contains('The Oracle is currently unclear. Please ask again later.')
  })
})
