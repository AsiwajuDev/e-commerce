import React from "react";

//ReactStrap components
import { Navbar, NavbarBrand } from "reactstrap";

//Project Components
import Menu from "./Components/Menu/Menu";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristoront Confusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
