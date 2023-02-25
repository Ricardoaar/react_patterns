import React from "react";
import StateReducerPattern from "../Pages/StateReducerPattern";

const BasePage = React.lazy(() => import( "../Pages/BasePage"));
const CustomHooks = React.lazy(() => import( "../Pages/CustomHooks"));
const CompoundComponents = React.lazy(() => import( "../Pages/CompoundComponents"));
const ReusableStyles = React.lazy(() => import( "../Pages/ReusableStyles"));
const ControlProps = React.lazy(() => import( "../Pages/ControlProps"));
const PropsCollectorPattern = React.lazy(() => import( "../Pages/PropsCollectorPattern"));
const PropsGetterPattern = React.lazy(() => import( "../Pages/PropsGetterPattern"));
const StateInitializerPattern = React.lazy(() => import( "../Pages/StateInitializerPattern"));

interface Route {
  path: string;
  to: string;
  component: React.FC | React.ComponentClass;
  exact?: boolean;
  componentsProps?: any;
  name?: string;
}

const routes: Route[] = [
  {
    path: "/",
    component: BasePage,
    exact: true,
    name: "Base Page",
    to: "/"
  },
  {
    path: "/custom-hooks",
    component: CustomHooks,
    exact: true,
    name: "Custom Hooks",
    to: "/custom-hooks"

  },
  {
    path: "/compound-components",
    component: CompoundComponents,
    exact: true,
    name: "Compound Components",
    to: "/compound-components"
  }, {
    path: "/resuable-styles",
    component: ReusableStyles,
    exact: true,
    name: "Resuable Styles",
    to: "/resuable-styles"

  }, {
    path: "/control-props",
    component: ControlProps,
    exact: true,
    name: "Control Props",
    to: "/control-props"
  }, {
    path: "/props-collections",
    component: PropsCollectorPattern,
    exact: true,
    name: "Props Collections",
    to: "/props-collections"
  },
  {
    path: "/props-getters",
    component: PropsGetterPattern,
    exact: true,
    name: "Props Getters",
    to: "/props-getters"
  }, {
    path: "/state-initializers",
    component: StateInitializerPattern,
    exact: true,
    name: "State Initializers",
    to: "/state-initializers"
  }, {
    path: "/state-reducer",
    component: StateReducerPattern,
    exact: true,
    name: "State Reducer",
    to: "/state-reducer"
  }
];


export default routes;
