import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <div className='container mx-auto font-sans'>
        <Navbar title='Lightning Weather' icon='fas fa-bolt' />
      </div>
    );
  }
}

export default App;
