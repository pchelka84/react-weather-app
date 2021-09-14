import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import City from "./components/city/City";
import Search from "./components/city/Search";
import ErrorAlert from "./components/layout/ErrorAlert";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    city: null,
    loading: false,
    error: null,
  };

  // Search City
  searchCity = async (text) => {
    try {
      const res = await axios.get(
        `https:\\api.openweathermap.org/data/2.5/weather?q=${text}&units=imperial&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
      );

      console.log(res.data);
      this.setState({ city: res.data, loading: false });
    } catch (err) {
      console.log(`Error: ${err}`);
      this.setState({
        error: "Please enter a different location.",
      });

      setTimeout(() => {
        this.setState({ error: null });
      }, 5000);
    }
  };

  // Clear City from state
  clearCity = () => {
    this.setState({ city: null, loading: false });
  };

  render() {
    const { city, loading, error } = this.state;

    return (
      <div className='font-roboto bg-blue-50 bg-opacity-40 h-full'>
        <Navbar title='Lightning Weather' icon='fas fa-cloud-sun' />
        <div className='mx-auto md:w-2/5 px-4 md:px-8 text-center'>
          <ErrorAlert errorMsg={error} />
          <Search
            searchCity={this.searchCity}
            clearCity={this.clearCity}
            showClearIcon={city ? true : false}
          />
          {city && <City {...city} loading={loading} />}
        </div>
      </div>
    );
  }
}

export default App;
