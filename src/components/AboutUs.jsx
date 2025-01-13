import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="about-container">
        <h1 className="about-title">About Occult Studio (Tarot)</h1>
        <p className="about-text">
          Welcome to <strong>Occult Studio (Tarot)</strong>, where ancient
          wisdom meets modern technology. We offer personalized tarot readings
          and daily insights designed to guide you on your journey. Discover
          clarity, healing, and self-reflection through our intuitive card
          pulls.
        </p>

        <h2 className="about-subtitle">Why Tarot?</h2>
        <p className="about-text">
          Tarot is a powerful tool for reflection and guidance. Each card you
          draw reveals deep insights, empowering you to navigate life's
          uncertainties. Whether you're searching for answers or inspiration,
          the universe is ready to speak to you.
        </p>

        <button className="explore-btn">🔮 Start Your Reading</button>
      </div>
    </>
  );
};

export default AboutUs;
