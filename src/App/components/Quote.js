import React, { useState, useEffect } from "react";
import { setRandomQuote } from "./setRandomQuote";
import { setRandomColor } from "./setRandomColor";
import { NetButton } from "./NetButton";

export function Quote({ bodyBackground }) {
  const [quoteObj, setQuoteObj] = useState(null);
  const [color, setColor] = useState(null);
  const [opacity, setOpacity] = useState(0);
  const [error, setError] = useState(null);
  const [twitterLink, setTwitterLink] = useState(null);
  const [tumblrLink, setTumblrLink] = useState(null);

  useEffect(() => {
    onNewQuoteButtonClick();
  }, []);
  useEffect(() => {
    setTwitterLink(
      "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
        encodeURIComponent(
          '"' +
            (quoteObj && quoteObj.quote) +
            '" ' +
            (quoteObj && quoteObj.author)
        )
    );
    setTumblrLink(
      "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
        encodeURIComponent(quoteObj && quoteObj.quote) +
        "&content=" +
        encodeURIComponent(quoteObj && quoteObj.author) +
        "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
    );
    bodyBackground({ backgroundColor: color });
  }, [quoteObj]);

  const onNewQuoteButtonClick = () => {
    setOpacity(0);
    setTimeout(() => {
      setRandomQuote(setQuoteObj, setError);
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
        <i className="fa fa-quote-left"></i>
        <span id="text">{quoteObj && quoteObj.quote}</span>
      </div>
      <div className="quote-author" style={{ color: color, opacity: opacity }}>
        - <span id="author">{quoteObj && quoteObj.author}</span>
      </div>
      <div className="buttons d-flex justify-content-left align-items-center mt-4">
        <NetButton
          icon={"fa fa-twitter"}
          id={"tweet-quote"}
          title={"Tweet this quote!"}
          href={twitterLink}
          style={{ backgroundColor: color }}
        />
        <NetButton
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
