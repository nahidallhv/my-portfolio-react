import styles from './ProjectsStyles.module.css';
import eCommerse from '../../assets/e-c-logo.jpg';
import chatApp from '../../assets/chat-logo.jpg';
import animalsBlog from '../../assets/animals-blog.jpg';
import restoranApp from '../../assets/restoran-logo.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={eCommerse}
          link="#"
          h3="E-Commerce"
          p="E-Commerce Website"
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
