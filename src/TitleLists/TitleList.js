import React from 'react';
import TitleListItem from './TitleListItem';
import './TitleList.css';

class TitleList extends React.Component {
    state = { apiKey : '3e4feefa6ae5684b7396d21b1c9e4dbe',
    data : [], 
    mounted : false }

   
    loadContent() {
      var requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + this.state.apiKey;
      fetch(requestUrl).then((response)=>{
          return response.json();
      }).then((data)=>{
          this.setState({data : data});
      }).catch((err)=>{
          console.log("There has been an error");
      });
    }

    componentWillReceiveProps(nextProps){
      if(nextProps.url !== this.props.url && nextProps.url !== ''){
        this.setState({mounted:true,url:nextProps.url},()=>{
          this.loadContent();
        });
        
      }
    }

    componentDidMount() {
      if(this.props.url !== ''){
        this.loadContent();
        this.setState({mounted:true});
      }
      
    }

    render() {
      var titles ='';
      if(this.state.data.results) {
        titles = this.state.data.results.map(function(title, i) {
          if(i < 5) {
            var name = '';
            var backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
            if(!title.name) {
              name = title.original_title;
            } else {
              name = title.name;
            }
  
            return (
              <TitleListItem key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} />
            );  
  
          }else{
            return (<div key={title.id}></div>);
          }
        }); 
  
      } 
      
      return (
        <div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
          <div className="Title">
            <h1>{this.props.title}</h1>
            <div className="titles-wrapper">
              {titles}
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default TitleList;