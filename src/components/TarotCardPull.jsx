import React, { useState } from "react";
import tarotCards from "../data/tarotCards.json";

const TarotCardPull = () => {
  const [question, setQuestion] = useState("");
  const [drawnCards, setDrawnCards] = useState([]);
  const [interpretation, setInterpretation] = useState("");

  // Randomly draw 3 tarot cards
  const drawCards = () => {
    const shuffled = tarotCards.sort(() => 0.5 - Math.random());
    const selectedCards = shuffled.slice(0, 3);
    setDrawnCards(selectedCards);

    // AI-generated interpretation based on the cards
    const meanings = selectedCards.map((card) => card.meaning).join(", ");
    const aiMessage = `Your cards suggest: ${meanings}. Focus on how this connects to your question about "${question}". Trust your intuition.`;
    setInterpretation(aiMessage);
  };

  return (
    <div className="tarot-container">
      <h2>AI-Driven Tarot Card Pull</h2>
      <input
        type="text"
        placeholder="Ask a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="question-input"
      />
      <button onClick={drawCards} className="draw-button">
        Draw Cards
      </button>

      <div className="card-display">
        {drawnCards.map((card, index) => (
          <div key={index} className="tarot-card">
            <img src={card.image} alt={card.name} />
            <h4>{card.name}</h4>
          </div>
        ))}
      </div>

      {interpretation && (
        <div className="interpretation">
          <h3>Interpretation</h3>
          <p>{interpretation}</p>
        </div>
      )}
    </div>
  );
};

export default TarotCardPull;
