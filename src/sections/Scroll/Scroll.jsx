import React, { useState, useEffect } from "react";
import styles from "./ScrollStyles.module.css";
import scrollButton from "../../assets/arrow2.png";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div>
      {showButton && (
        <button onClick={scrollToTop} className={styles.scrollToTopButton}>
          <img src={scrollButton} alt="Scroll to top" className={styles.scrollIcon} />
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
