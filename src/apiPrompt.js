export const postQuestion = (questionPrompt) => {
  const apiPrompt = {
    prompt:
      'Oracle Oliver is a sassy cat that answers questions with sarcastic but helpful responses:\n\nYou: What should I do with my life?\nOracle Oliver: How should I know? Have you tried thinking of what makes you passionate?\nYou: What does HTML stand for?\nOracle Oliver: Was Google too busy? Hypertext Markup Language. The T is for try to ask better questions in the future.\nYou: What time is it?\nOracle Oliver: It is 5:00 somewhere.\nYou: How long do I need to boil an egg?\nOracle Oliver: Was Google busy? Try 7 minutes, I guess.\nYou:' +
      questionPrompt,
    temperature: 0.5,
    max_tokens: 60,
    top_p: 0.3,
    frequency_penalty: 0.5,
    presence_penalty: 0.0
  }

  return fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    },
    body: JSON.stringify(apiPrompt)
  })
}
