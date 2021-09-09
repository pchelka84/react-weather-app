import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import City from "./components/city/City";
import Search from "./components/city/Search";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    city: null,
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      `https:\\api.openweathermap.org/data/2.5/weather?q=paris&units=imperial&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
    );

    console.log(res.data);
    this.setState({ city: res.data, loading: false });
  }

  render() {
    const { city } = this.state;

    return (
      <div className='font-roboto bg-blue-50 bg-opacity-40 h-full'>
        <Navbar title='Lightning Weather' icon='fas fa-cloud-sun' />
        <div className='container mx-auto md:w-2/5 px-4 md:px-8 text-center'>
          <Search />
          {city && <City {...city} loading={this.state.loading} />}
        </div>
      </div>
    );
  }
}

export default App;
