import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.onSearchTermChange = props.onSearchTermChange;
  }
  render(){
    return (
      <div className="search-bar">
        <input 
          onChange={event =>this.onInputChange(event.target.value)}/>
      </div>
    );
  }

  onInputChange(term) {
    this.onSearchTermChange(term);
  }
}


export default SearchBar;