// SkillList.js
import styles from "../sections/Skills/SkillsStyles.module.css"; // Burada yeni CSS dosyasını import edin

function SkillList({ src }) {
  return (
    <div className={styles.iconWrapper}>
      <img src={src} alt="Skill icon" />
    </div>
  );
}

export default SkillList;
