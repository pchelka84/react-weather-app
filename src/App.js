import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import City from "./components/city/City";
import axios from "axios";

class App extends Component {
  state = {
    city: null,
    loading: false,
  };

  async componentDidMount() {
    const res = await axios.get(
      `https:\\api.openweathermap.org/data/2.5/weather?q=paris&units=imperial&appid=92412bd131720772a9d0537da3f1a53b`
    );

    console.log(res.data);
    this.setState({ city: res.data });
  }

  render() {
    const { city } = this.state;

    return (
      <div className='font-roboto'>
        <Navbar title='Lightning Weather' icon='fas fa-cloud-sun' />
        <div className='container mx-auto md:w-2/5 px-4 md:px-8 text-center'>
          {city && <City {...city} />}
        </div>
      </div>
    );
  }
}

export default App;
