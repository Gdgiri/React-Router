// NotFoundPage.js

import React, { useEffect } from "react";

const NotFoundPage = () => {
  useEffect(() => {
    const body = document.body;
    const createStar = () => {
      const right = Math.random() * 500;
      const top = Math.random() * window.innerHeight;
      const star = document.createElement("div");
      star.classList.add("star");
      body.appendChild(star);
      let rightPosition = right;
      const runStar = () => {
        if (rightPosition >= window.innerWidth) {
          star.remove();
        }
        rightPosition += 3;
        star.style.right = rightPosition + "px";
      };
      star.style.top = top + "px";
      setInterval(runStar, 10);
    };

    const intervalId = setInterval(createStar, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="not-found-page">
      <div className="center">
        <section className="error">
          <h1 className="error__title">404</h1>
          <h2 className="error__type">Page not found</h2>
          <p className="error__cta">
            We’re sorry, the page you have looked for does not exist
            <a
              className="error__link error__link--purple"
              href="/"
              target="_blank"
            >
              home page
            </a>
          </p>
        </section>
      </div>
      <div className="astronaut">
        <img
          src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
          alt="Astronaut"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
