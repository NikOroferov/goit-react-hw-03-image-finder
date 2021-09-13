import './App.css';
import React, { Component } from 'react';

import Searchbar from 'componts/Searchbar/Searchbar';
import ImageGallery from 'componts/ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    searchQuery: '',
  };

  handleFormSubmit = queryValue => {
    this.setState({ searchQuery: queryValue });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchValue={this.state.searchQuery} />
      </div>
    );
  }
}
