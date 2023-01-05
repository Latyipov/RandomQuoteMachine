import React, { useState, useEffect, useRef, useContext } from "react";
import { getRandomQuote } from "../services/getRandomQuote";
import { ShareButton } from "./ShareButton";
import { colorContext } from "../App";

const TWITTER = new URL(
  "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp"
);
const TUMBLR = new URL(
  "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
);

export function Quote() {
  const [{ quoteObject, error }, setQuote] = useState(getRandomQuote());
  const { color, refreshColor } = useContext(colorContext);
  const [opacity, setOpacity] = useState(0);

  TWITTER.searchParams.set(
    "text",
    `"${encodeURIComponent(quoteObject.quote)} ${encodeURIComponent(
      quoteObject.author
    )}`
  );
  TUMBLR.searchParams.set("caption", encodeURIComponent(quoteObject.quote));
  TUMBLR.searchParams.set("content", encodeURIComponent(quoteObject.author));

  useEffect(() => {
    setOpacity(1);
  }, []);

  const onNewQuoteButtonClick = () => {
    setOpacity(0);
    setTimeout(() => {
      refreshColor();
      setQuote(getRandomQuote());
      setOpacity(1);
    }, 500);
  };
  console.log("render");
  if (!!error) {
    console.error(error);
    return <div>Something wrong.</div>;
  }

  return (
    <div id="quote-box" className="rounded-1 p-5 m-2">
      <div
        className="quote-text"
        style={{
          color: color,
          opacity: opacity,
        }}
      >
        <i className="quote-text__icon fa fa-quote-left"></i>
        <span id="text" className="text">
          {quoteObject.quote}
        </span>
      </div>
      <div className="quote-author" style={{ color: color, opacity: opacity }}>
        - <span id="author">{quoteObject.author}</span>
      </div>
      <div className="buttons d-flex justify-content-left align-items-center mt-4">
        <ShareButton
          icon={"fa fa-twitter"}
          id={"tweet-quote"}
          title={"Tweet this quote!"}
          href={TWITTER}
          color={color}
        />
        <ShareButton
          icon={"fa fa-tumblr"}
          id={"tumblr-quote"}
          title={"Post this quote on tumblr!"}
          href={TUMBLR}
          color={color}
        />
        <button
          className="button rounded-1 border-0 ms-auto"
          id="new-quote"
          onClick={onNewQuoteButtonClick}
          style={{ backgroundColor: color }}
        >
          New quote
        </button>
      </div>
    </div>
  );
}
