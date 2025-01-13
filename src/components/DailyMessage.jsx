import React from "react";

// Daily messages data
const messages = [
  {
    image: "/images/daily1.jpg",
    title: "Embrace New Beginnings",
    text: "Today is a perfect day to start fresh. Trust your journey.",
  },
  {
    image: "/images/daily2.jpg",
    title: "Find Your Balance",
    text: "Balance your energy and focus on what truly matters.",
  },
  {
    image: "/images/daily3.jpg",
    title: "Trust Your Intuition",
    text: "Listen to your inner voice; it knows the way.",
  },
];

const DailyMessage = () => {
  return (
    <div className="daily-message-container">
      <h2 className="daily-title">🔮 Daily Tarot Guidance 🔮</h2>
      <div className="daily-cards">
        {messages.map((item, index) => (
          <div className="daily-card" key={index}>
            <img src={item.image} alt={item.title} className="daily-image" />
            <h3 className="daily-card-title">{item.title}</h3>
            <p className="daily-card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyMessage;
