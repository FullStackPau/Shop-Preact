import { h } from "preact";
import { Router } from "preact-router";
import "./style.css";

import Header from "../header";

function Layout(props) {
  return (
    <div className="layout">
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
