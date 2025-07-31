import React, { useEffect, useState } from "react";
import quotes from "../data/quotes.json"; // adjust path if needed

const Motivation = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    if (quotes.length > 0) {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote.text);
    } else {
      setQuote("Stay motivated!");
    }
  }, []);

  return (
    <div className="text-center p-3 bg-light rounded">
      <h5 className="mb-2">Motivational Quote</h5>
      <p className="mb-0">{quote}</p>
    </div>
  );
};

export default Motivation;
