import React, { useState, useEffect } from "react";
import { setRandomQuote } from "./setRandomQuote";
import { setRandomColor } from "./setRandomColor";
import { ShareButton } from "./ShareButton";

export function Quote({ bodyBackground }) {
  const [quoteObject, setQuoteObject] = useState(null);
  const [color, setColor] = useState(null);
  const [opacity, setOpacity] = useState(0);
  const [error, setError] = useState(null);
  const [twitterLink, setTwitterLink] = useState(null);
  const [tumblrLink, setTumblrLink] = useState(null);

  useEffect(() => {
    onNewQuoteButtonClick();
  }, []);
  useEffect(() => {
    if (quoteObject) {
      setTwitterLink(
        `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${encodeURIComponent(
          quoteObject.quote
        )}" ${encodeURIComponent(quoteObject.author)}`
      );

      setTumblrLink(
        `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(
          quoteObject.quote
        )}&content=${encodeURIComponent(
          quoteObject.author
        )}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`
      );
    }

    bodyBackground({ backgroundColor: color });
  }, [quoteObject]);

  const onNewQuoteButtonClick = () => {
    setOpacity(0);
    setTimeout(() => {
      setRandomQuote(setQuoteObject, setError);
      setRandomColor(setColor);
      setOpacity(1);
    }, 500);
  };

  if (error) {
    console.error(error);
    return <div>Something wrong.</div>;
  }

  return (
    <div id="quote-box" className="rounded-1 p-5 m-2">
      <div className="quote-text" style={{ color: color, opacity: opacity }}>
        <i className="quote-text__icon fa fa-quote-left"></i>
        <span id="text">{quoteObject && quoteObject.quote}</span>
      </div>
      <div className="quote-author" style={{ color: color, opacity: opacity }}>
        - <span id="author">{quoteObject && quoteObject.author}</span>
      </div>
      <div className="buttons d-flex justify-content-left align-items-center mt-4">
        <ShareButton
          icon={"fa fa-twitter"}
          id={"tweet-quote"}
          title={"Tweet this quote!"}
          href={twitterLink}
          style={{ backgroundColor: color }}
        />
        <ShareButton
          icon={"fa fa-tumblr"}
          id={"tumblr-quote"}
          title={"Post this quote on tumblr!"}
          href={tumblrLink}
          style={{ backgroundColor: color }}
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
