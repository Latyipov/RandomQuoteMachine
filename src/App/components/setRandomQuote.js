import quote from "./quotes.json";

export async function setRandomQuote(onSuccess, onError) {
  try {
    const responseJson = await quote;
    const responseArr = await responseJson.quotes;
    const randomItem = Math.floor(Math.random() * responseArr.length);
    onSuccess(responseArr[randomItem]);

    return undefined;
  } catch (error) {
    onError(error);
  }
}
