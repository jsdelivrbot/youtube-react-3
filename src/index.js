import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash'

import SearchBar from './components/search-bar'
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'

const API_KEY = 'AIzaSyD8ttcLKqduTeW2V6u4GFrIfdhfMOlG5zg';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null  
    };

    this.videoSearch('japow');
  }

  videoSearch (term) {
    YTSearch({
      key: API_KEY,
      term},
      (videos) => {
        this.setState({
          videos,
          selectedVideo: videos[0] 
        });
      }
    );

  }

  render() {
    const videoSearch = _.debounce(
      (term) => {
        this.videoSearch(term)
      },
      300
    );
    return(
      <div >
        <SearchBar onSearchTermChange={term => videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render( 
  <App / > ,
  document.getElementById("root")
);