import React, { useState } from "react";
import { QUOTES } from "../../helpers/quotes";
import Navbar from "../navbar/navbar";
import QuoteContainer from "../quotecontained/quotecontainer";
const Home = () => {
  const [quotes, setQuotes] = useState(QUOTES[0]);

  const getQuotes = () => {
    let RandomNum = Math.floor(Math.random() * QUOTES.length);
    setQuotes(QUOTES[RandomNum]);
  };
  return (
    <>
      <Navbar />
      <QuoteContainer
        getQuote={quotes.quote}
        getAuthor={quotes.author}
        handleQuotes={getQuotes}
      />
    </>
  );
};

export default Home;
