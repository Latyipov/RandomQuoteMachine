import quote from "./quotes.json";

export function setRandomQuote(onSuccess, onError) {
  try {
    const responseJson = quote;
    const responseArr = responseJson.quotes;
    const randomItem = Math.floor(Math.random() * responseArr.length);
    onSuccess(responseArr[randomItem]);

    return undefined;
  } catch (error) {
    onError(error);
  }
}
