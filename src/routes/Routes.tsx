import React, { Component, Suspense } from "react";
import routes from "./routes";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import styles from "./routes.module.css";
import ReactLogo from "../assets/react.svg";

const Router = () => {

  return (
    <BrowserRouter>
      <div className={styles.appContainer}>
        <ul className={styles.navigation}>
          <li>
            <NavLink to="/" className={styles.navlink}>
              <img className={styles.reactLogo} src={ReactLogo} alt="logo" />
            </NavLink>
          </li>
          {routes.map(({ to, name }) => {
            return <li key={name} className={styles.navlink}><NavLink to={to}>{name}</NavLink></li>;

          })}
        </ul>
        <section className={styles.appContent}>
          <Suspense fallback={"Loading"}>
            <Routes>
              {routes.map(({ path, component: Component, componentsProps = {} }, index) => {
                return (
                  <Route
                    key={path}
                    path={path}
                    element={<Component {...componentsProps} />}
                  />);
              })}
            </Routes>
          </Suspense>
        </section>
      </div>

    </BrowserRouter>

  );
};

export default Router;
