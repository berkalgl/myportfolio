import React, { Component } from "react";
import './App.scss';
import Header from './components/Header';
import LanguageIcons from "./components/LanguageIcons";
import Intro from "./components/Intro";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resumeData: {},
      sharedData: {},
    };
  }
  
  componentDidMount(){
    this.loadSharedData(this);
  }

  loadResumeFromPath(path){
     fetch(path)
        .then(results => results.json())
        .then(data => {      
          this.setState({resumeData: data});
        })
        .catch((error) => {
          alert(error);
        });
  }

  loadSharedData(component){
    fetch('shared_data.json')
      .then(results => results.json())
      .then(data => {      
        component.setState({sharedData: data});
        document.title = `${this.state.sharedData.basic_info.name}`
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Intro sharedData={this.state.sharedData.basic_info}></Intro>
        <LanguageIcons loadResumeFromPathCallback = {this.loadResumeFromPath}></LanguageIcons>
      </div>
    )
  }
}

export default App;