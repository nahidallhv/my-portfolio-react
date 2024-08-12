import React, { useState, useEffect } from "react";
import styles from "./ScrollStyles.module.css";
import scrollButton from "../../assets/arrow.png"; // Yukarı kaydırma butonu ikonu

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  // Sayfa kaydırıldığında butonu göstermek için event listener ekleyelim
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

  // Butona tıklandığında sayfanın en üstüne gidelim
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Yumuşak bir kaydırma efekti sağlar
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
