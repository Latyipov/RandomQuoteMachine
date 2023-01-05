import quote from "../quotesMock/quotes.json";

export function getRandomQuote() {
  try {
    const { quotes } = quote;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return {
      quoteObject: quotes[randomIndex],
      error: null,
    };
  } catch (error) {
    return {
      quoteObject: null,
      error,
    };
  }
}
