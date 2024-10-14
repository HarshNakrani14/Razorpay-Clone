import React, { useState, useRef, useEffect } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";

function StackCards() {
  const [activeLink, setActiveLink] = useState("Accept Payments");

  // Refs for each card
  const cardRefs = {
    "Accept Payments": useRef(null),
    "Make Payouts": useRef(null),
    "Start Business Banking": useRef(null),
    "Automate Payroll": useRef(null),
    "Credit & Loans": useRef(null),
  };

  // Function to scroll to the respective card
  const scrollToCard = (link) => {
    setActiveLink(link);
    const cardElement = cardRefs[link].current;
    if (cardElement) {
      const navHeight = document.querySelector('nav') ? document.querySelector('nav').offsetHeight : 0;
      const cardPosition = cardElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: cardPosition - navHeight,
        behavior: "smooth",
      });
    }
  };

  // Effect to observe cards and update active link
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.dataset.link);
        }
      });
    }, options);

    Object.keys(cardRefs).forEach((key) => {
      if (cardRefs[key].current) {
        cardRefs[key].current.dataset.link = key;
        observer.observe(cardRefs[key].current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex justify-center p-4 md:p-8 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <div className="w-full max-w-screen-lg">
        {/* Navigation links (only visible on medium and larger devices) */}
        <nav className="hidden md:flex sticky top-0 z-30 flex-col md:flex-row justify-between items-center p-4 bg-slate-100 shadow-md rounded-md">
          <ul className="flex flex-wrap gap-4 md:gap-8 font-semibold text-slate-600 items-center">
            {[
              "Accept Payments",
              "Make Payouts",
              "Start Business Banking",
              "Automate Payroll",
              "Credit & Loans",
            ].map((link) => (
              <li
                key={link}
                className={`cursor-pointer hover:text-blue-600 transition-colors duration-300 ${
                  activeLink === link
                    ? "text-blue-600 border-b-4 border-blue-600"
                    : "text-slate-600"
                }`}
                onClick={() => scrollToCard(link)}
              >
                {link}
              </li>
            ))}
          </ul>
          <button className="mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors duration-300">
            Get Started Now
          </button>
        </nav>

        {/* Cards Section */}
        <div className="mt-6 flex flex-col gap-4">
          {Object.keys(cardRefs).map((key) => (
            <div
              key={key}
              ref={cardRefs[key]}
              className={`transition-transform transform duration-300 ease-in-out ${
                activeLink === key ? "scale-105 z-10" : "scale-100"
              } shadow-lg hover:shadow-xl rounded-md bg-gray-100 relative p-4 md:p-6`}
              style={{ marginBottom: "1rem" }} // Adds spacing between cards
              data-link={key} // Set the data-link attribute for the observer
            >
              {key === "Accept Payments" && <Card1 />}
              {key === "Make Payouts" && <Card2 />}
              {key === "Start Business Banking" && <Card3 />}
              {key === "Automate Payroll" && <Card4 />}
              {key === "Credit & Loans" && <Card5 />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StackCards;
