import React, { useState, useEffect } from "react";
import { setRandomQuote } from "./setRandomQuote";
import { setRandomColor } from "./setRandomColor";
import { NetButton } from "./NetButton";

export function Quote() {
  const [quoteObj, setQuoteObj] = useState(null);
  const [color, setColor] = useState(null);
  const [error, setError] = useState(null);
  const [twitterLink, setTwitterLink] = useState(null);
  const [tumblrLink, setTumblrLink] = useState(null);

  useEffect(() => {
    onNewQuoteButtonClick();
  }, []);

  $(".quote-text, .quote-author").css("color", color);
  $(".body, .button").css("background-color", color);
  $("#tweet-quote").attr(
    "href",
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      encodeURIComponent(
        '"' +
          (quoteObj && quoteObj.quote) +
          '" ' +
          (quoteObj && quoteObj.author)
      )
  );
  $("#tumblr-quote").attr(
    "href",
    "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
      encodeURIComponent(quoteObj && quoteObj.quote) +
      "&content=" +
      encodeURIComponent(quoteObj && quoteObj.author) +
      "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
  );

  const onNewQuoteButtonClick = () => {
    $(".quote-text, .quote-author").animate({ opacity: 0 }, 500, () => {
      $(".quote-text, .quote-author").animate({ opacity: 1 }, 500);
      setRandomQuote(setQuoteObj, setError);
      setRandomColor(setColor);
    });
  };

  if (error) {
    console.error(error);
    return <div>Something wrong.</div>;
  }

  return (
    <div id="quote-box" className="rounded-1 p-5 m-2">
      <div className="quote-text">
        <i className="fa fa-quote-left"></i>
        <span id="text">{quoteObj && quoteObj.quote}</span>
      </div>
      <div className="quote-author">
        - <span id="author">{quoteObj && quoteObj.author}</span>
      </div>
      <div className="buttons d-flex justify-content-left align-items-center mt-4">
        <NetButton
          icon={"fa fa-twitter"}
          id={"tweet-quote"}
          title={"Tweet this quote!"}
        />
        <NetButton
          icon={"fa fa-tumblr"}
          id={"tumblr-quote"}
          title={"Post this quote on tumblr!"}
        />
        <button
          className="button rounded-1 border-0 ms-auto"
          id="new-quote"
          onClick={onNewQuoteButtonClick}
        >
          New quote
        </button>
      </div>
    </div>
  );
}
