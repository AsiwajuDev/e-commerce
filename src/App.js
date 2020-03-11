import React, { Component } from "react";

//ReactStrap components
import { Navbar, NavbarBrand } from "reactstrap";

//Project Components
import Menu from "./Components/Menu/Menu";

//Content Information
import { DISHES } from "./Shared/Dishes";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristoront Confusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
