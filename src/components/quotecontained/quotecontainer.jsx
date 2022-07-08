import React from "react";
import Button from "@mui/material/Button";
const QuoteContainer = ({ getQuote, getAuthor, handleQuotes }) => {
  const [color, setColor] = React.useState("rgb(255,255,255)");
  React.useEffect(() => {
    setColor(
      `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)})`
    );
  }, [getQuote]);
  console.log(color);
  return (
    <>
      <div className="quotecontained" style={{ backgroundColor: color }}>
        <div className="quote-box">
          <div className="quotes" style={{ color: color }}>
            {getQuote}
          </div>
          <div className="author" style={{ color: color }}>
            by- {getAuthor}
          </div>

          <div className="quote-buttons">
            <Button variant="contained" onClick={handleQuotes}>
              New Quote
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteContainer;
