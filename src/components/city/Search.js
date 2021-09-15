import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchCity: PropTypes.func.isRequired,
    clearCity: PropTypes.func.isRequired,
    showClearIcon: PropTypes.bool.isRequired,
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
    const { clearCity, showClearIcon } = this.props;
    return (
      <Fragment>
        <form onSubmit={this.onSubmit} className='flex justify-center py-2'>
          <input
            type='text'
            name='text'
            placeholder='Enter City...'
            value={this.state.text}
            onChange={this.onChange}
            className='blok w-full bg-gray-100 outline-none border border-gray-200 focus:border-blue-400 placeholder-gray-500 focus:placeholder-blue-400 p-2'
          />
          <input
            type='submit'
            value='Search'
            onSubmit={this.onSubmit}
            className='appearance-none bg-blue-500 hover:bg-blue-700 text-white p-2 px-4'
          />
        </form>
        {showClearIcon && (
          <button
            className='bg-gray-600 text-white w-full p-2 mb-3'
            onClick={clearCity}
          >
            Clear
          </button>
        )}
      </Fragment>
    );
  }
}

export default Search;
