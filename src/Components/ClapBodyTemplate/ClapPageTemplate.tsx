import React from "react";
import ShowcaseContainer from "../../Containers/ShowcaseContainer";
import styles from "./styles.module.css";

type ClapPageTemplateProps = {
  title?: string;
  description: string;
  children: React.ReactNode | React.ReactNode[];

}


const ClapPageTemplate = ({ title = "", description, children }: ClapPageTemplateProps) => {
  return (
    <ShowcaseContainer>
      <h1 className={styles.title}>{title}</h1>
      {children}
      <p className={styles.footerText}>{description}</p>
    </ShowcaseContainer>
  );
};

export default ClapPageTemplate;
