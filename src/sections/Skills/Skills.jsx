import styles from "./SkillsStyles.module.css";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import javascriptIcon from "../../assets/javascript-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import apiIcon from "../../assets/api-icon.svg";
import tailwindIcon from "../../assets/tailwind-icon.svg";
import reduxIcon from "../../assets/redux-icon.svg";
import gitIcon from "../../assets/git-icon.svg";
import githubIcon from "../../assets/github-icon.svg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={htmlIcon} />
        <SkillList src={cssIcon} />
        <SkillList src={javascriptIcon} />
        <SkillList src={typescriptIcon} />
        <SkillList src={nodeIcon} />
        <SkillList src={reactIcon} />
      </div>
      <div className={styles.skillList}>
        <SkillList src={apiIcon} />
        <SkillList src={tailwindIcon} />
        <SkillList src={bootstrapIcon} />
      </div>
      <div className={styles.skillList}>
        <SkillList src={reduxIcon} />
        <SkillList src={gitIcon} />
        <SkillList src={githubIcon} />
      </div>
    </section>
  );
}

export default Skills;
