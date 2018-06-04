import React from 'react';
import TitleList from './TitleList';

class Home extends React.Component {
  
    state = { apiKey : '3e4feefa6ae5684b7396d21b1c9e4dbe',
    data : [], 
    mounted : false, 
    searchTerm:"", 
    searchUrl:""
    }
    
    handleKeyUp(e){
      if (e.key === 'Enter' && this.state.searchTerm !== '') {
        var searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey;
        this.setState({searchUrl:searchUrl});
      }
    }
  
    handleChange(e){
        this.setState({searchTerm : e.target.value});    
    }

    render() {
      return (
        <div>
          <TitleList title="Search Results" url={this.state.searchUrl} />
          <TitleList title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1' />
          <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
          <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
          <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
          <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />
        </div>
      )
    }
}

export default Home;