import React from "react";
import './App.scss';
import Header from './components/Header';
import LanguageIcons from "./components/LanguageIcons";
import Intro from "./components/Intro";
import {Get} from "./utils/apiHelper";

export default function App() {
  const [resumeData, setResumeData] = React.useState({});
  const [sharedData, setSharedData] = React.useState({});

  const loadResumeFromPath = (path) => {
    Get(
      path,
      (data) => {
        setResumeData(data);
      },
      (error) => {
        alert(error);
      });
  }
  
  const loadSharedData = () => {
    Get(
      'shared_data.json',
      (data) => {
        setSharedData(data);
      },
      (error) => {
        alert(error);
      });
  }  

  return (
    <div>
      <Header></Header>
      <Intro sharedData={sharedData.basic_info}></Intro>
      <LanguageIcons loadResumeFromPathCallback = {loadResumeFromPath}></LanguageIcons>
    </div>
  )
}