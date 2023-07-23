import { memo, useCallback, useMemo } from "react";
import FadeIn from "react-fade-in";
import { useDispatch, useSelector } from "react-redux";
import { experience } from "../../constants";
import { handleActive } from "../../redux/slices/experienceSlice";
import { RootState } from "../../redux/store";
import styles from "./index.module.scss";

const ExperiencePage = () => {
  const { active } = useSelector(
    (state: RootState) => state.experience,
    (prev, next) => prev.active === next.active
  ); // memoized selector
  const { isDarkMode } = useSelector(
    (state: RootState) => state.navBar,
    (prev, next) => prev.isDarkMode === next.isDarkMode
  ); // memoized selector

  const dispatch = useDispatch();
  const changeActive = useCallback(
    (index: number) => {
      dispatch(handleActive(index));
    },
    [dispatch]
  ); // memoized function

  const currentExperience = useMemo(() => {
    return experience?.filter((el, i) => i === active)[0] || null;
  }, [active]); // memoized value

  return (
    <div className={`${styles.experience} ${!isDarkMode && styles.light}`}>
      <div className={styles.heading}>
        <h1 className={styles.title}> Where I’ve Worked</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.places}>
            {experience?.map(({ place }, i) => (
              <h2
                key={i}
                className={`${styles.place} ${active === i && styles.active}`}
                onClick={() => changeActive(i)}
              >
                {place}
              </h2>
            ))}
          </div>
          {currentExperience && (
            <FadeIn className={styles.role}>
              <h1 className={styles.name}>{currentExperience.role}</h1>
              <p className={styles.timeline}>{currentExperience.timeline}</p>
              <div className={styles.responsibilities}>
                {currentExperience.responsibilities.map(
                  (el: string, i: number) => (
                    <div className={styles.responsibility} key={i}>
                      <span className={styles.icon}>✔️</span>
                      <h3 className={styles.text}>{el}</h3>
                    </div>
                  )
                )}
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ExperiencePage);
