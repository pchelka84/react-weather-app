import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchCity(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmit}
          className='flex justify-center lg:border border-gray-200 bg-white p-4 mb-4'
        >
          <input
            type='text'
            name='text'
            placeholder='Enter City...'
            value={this.state.text}
            onChange={this.onChange}
            className='bg-gray-100 outline-none rounded-l-md border-2 border-gray-200 focus:ring focus:ring-blue-400 focus:border-none placeholder-gray-500 focus:placeholder-blue-400 p-2 ml-2'
          />
          <input
            type='submit'
            value='Search'
            className='appearance-none bg-blue-500 hover:bg-blue-700 text-white rounded-r-md p-2 px-4 mr-2'
          />
        </form>
      </div>
    );
  }
}

export default Search;
