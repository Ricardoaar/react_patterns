import React from "react";
import styles from "./showcase.module.css";

type ShowcaseContainerProps = {
  children: React.ReactNode | React.ReactNode[];
}

const ShowcaseContainer = ({ children }: ShowcaseContainerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default ShowcaseContainer;
