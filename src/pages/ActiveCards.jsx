import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/activeCards/activeCards.css";

// Components
import Header from "../components/common/Header";
import ActiveCardsMain from "../components/activeCards/ActiveCardsMain";
import Footer from "../components/common/Footer";

const ActiveCards = () => {
  return (
    <div>
      <Header />
      <ActiveCardsMain />
      <Footer />
    </div>
  );
};

export default ActiveCards;
