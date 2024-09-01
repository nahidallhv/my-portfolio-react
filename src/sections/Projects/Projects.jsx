import styles from './ProjectsStyles.module.css';
import diceGame from '../../assets/dice-game.jpeg';
import chatApp from '../../assets/chat-logo.jpeg';
import animalsBlog from '../../assets/animals-blog.jpeg';
import restoranApp from '../../assets/restoran-logo.jpeg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={diceGame}
          link="https://dicegamee.vercel.app/"
          h3="Dice Game"
          p="Self-Employed Project"
        />
        <ProjectCard
          src={chatApp}
          link="#"
          h3="Chat App"
          p="React Chat App"
        />
        <ProjectCard
          src={animalsBlog}
          link="#"
          h3="Animals Blog"
          p="Blog Website"
        />
        <ProjectCard
          src={restoranApp}
          link="#"
          h3="Red House"
          p="Restoran Website"
        />
      </div>
    </section>
  );
}

export default Projects;
