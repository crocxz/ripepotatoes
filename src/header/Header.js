import React from "react";
import Menu from './Menu';
import UserProfile from './UserProfile'; 
import Logo from '../Logo';
import './Header.css';

class Header extends React.Component {
    state = { apiKey : '87dfa1c669eea853da609d4968d294be',
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
          <header className="Header">
            <Logo />
            <Menu />
            <div id="search" className="Search">
              <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search" placeholder="Search for a title..." value={this.state.searchTerm}/>
            </div>
            <UserProfile />
          </header>
        </div>
      )
    }
}

export default Header;