import { FC, ReactNode } from "react";
import ProjectsNavigation, {
  ProjectsNavigationDetails,
} from "../../components/projects/navigation/Nav";
import styles from "./index.module.scss";

type LayoutProps = {
  children: ReactNode;
};
const ProjectLayout: FC<LayoutProps & ProjectsNavigationDetails> = ({
  children,
  about,
  github,
  documentation,
  hasDocumentation,
  hasGithub,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>{children}</div>
      <div className={styles.right}>
        <ProjectsNavigation
          {...{
            about,
            github,
            documentation,
            hasDocumentation,
            hasGithub,
          }}
        />
      </div>
    </div>
  );
};

export default ProjectLayout;
