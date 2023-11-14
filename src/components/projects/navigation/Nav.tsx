import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import AboutProject from "./About";
import ProjectDocumentation from "./Documentation";
import GithubView from "./GithubView";
import styles from "./index.module.scss";

export type ProjectsNavigationDetails = {
  about: string;
  github: string;
  documentation: string;
  hasGithub?: boolean;
  hasDocumentation?: boolean;
};

const ProjectsNavigation: FC<ProjectsNavigationDetails> = ({
  about,
  github,
  documentation,
  hasDocumentation,
  hasGithub,
}) => {
  const { isDarkMode } = useSelector((state: RootState) => state.navBar);

  return (
    <div className={styles.container}>
      <AboutProject
        {...{
          about,
          isDarkMode,
        }}
      />
      {!hasDocumentation ? (
        <ProjectDocumentation
          {...{
            link: documentation,
            isDarkMode,
          }}
        />
      ) : null}
      {!hasGithub ? (
        <GithubView
          {...{
            link: github,
            isDarkMode,
          }}
        />
      ) : null}
    </div>
  );
};

export default ProjectsNavigation;
