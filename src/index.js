import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar'
import VideoList from './components/video-list'

const API_KEY = 'AIzaSyD8ttcLKqduTeW2V6u4GFrIfdhfMOlG5zg';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {videos: []};

    YTSearch({
      key: API_KEY,
      term: 'snowboard'},
      (videos) => {
        this.setState({videos});
      }
    );
  }

  render() {
    return(
      <div >
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render( 
  <App / > ,
  document.getElementById("root")
);