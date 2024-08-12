import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/profile-hero.jpeg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import instagramLight from "../../assets/instagram-light.svg";
import instagramDark from "../../assets/instagram-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/CV.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const instagramIcon = theme === "light" ? instagramLight : instagramDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Nahid Allahverdiyev"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Nahid
          <br />
          Allahverdiyev
        </h1>
        <h2> Junior Frontend Developer</h2>
        <span>
          <a href="https://instagram.com/nahidallhv" target="_blank">
            <img src={instagramIcon} alt="instagram icon" />
          </a>
          <a href="https://github.com/nahidallhv" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/nahidallhv/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Hi, I am studying the field of frontend (React.js) developer.From a
          young age, I have been captivated by the power of technology and its
          ability to shape the world around us. This fascination led me to
          pursue a degree in Computer Science, where I gained a comprehensive
          understanding of web development principles and best practices.
          Throughout my academic journey, I have honed my skills in HTML, CSS,
          and JavaScript, and have successfully completed several projects that
          demonstrate my ability to create visually appealing and user-friendly
          websites
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
