import Groq from 'groq-sdk';

const groqApiKey = process.env.REACT_APP_GROQ_API_KEY?.trim();

const groq = new Groq({
  apiKey: groqApiKey,
  dangerouslyAllowBrowser: true,
});

export default groq;