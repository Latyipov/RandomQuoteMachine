import React from "react";

export function App() {
  return (
    <div className="body d-flex flex-column justify-content-center align-items-center bg-primary">
      <div id="wrapper">
        <div id="quote-box" className="rounded-1 p-5 m-2">
          <div className="quote-text">
            <i className="fa fa-quote-left"></i>
            <span id="text">
              Every strike brings me closer to the next home run
            </span>
          </div>
          <div className="quote-author">
            - <span id="author">Babe Ruth</span>
          </div>
          <div className="buttons d-flex justify-content-left align-items-center mt-4">
            <a
              className="button rounded-1 bg-primary"
              id="tweet-quote"
              title="Tweet this quote!"
              target="_top"
              href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22Every%20strike%20brings%20me%20closer%20to%20the%20next%20home%20run.%22%20Babe%20Ruth"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              className="button rounded-1 bg-primary"
              id="tumblr-quote"
              title="Post this quote on tumblr!"
              target="_blank"
              href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Babe%20Ruth&amp;content=Every%20strike%20brings%20me%20closer%20to%20the%20next%20home%20run.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
            >
              <i className="fa fa-tumblr"></i>
            </a>
            <button className="btn btn-primary ms-auto" id="new-quote">
              New quote
            </button>
          </div>
        </div>
      </div>
      <div className="footer m-2">
        <span className="text-white">by </span>
        <a className="text-white" href="">
          Latyipov
        </a>
      </div>
    </div>
  );
}
