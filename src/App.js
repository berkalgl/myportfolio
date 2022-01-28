import React, { useEffect } from "react";
import './App.scss';
import Header from './components/Header';
import LanguageIcons from "./components/LanguageIcons";
import Intro from "./components/Intro";
import {Get} from "./utils/apiHelper";

export default function App() {
  const [resumeData, setResumeData] = React.useState({});
  const [sharedData, setSharedData] = React.useState({});

  const loadResumeFromPath = async (path) => {
    await Get(
      path,
      (data) => {
        setResumeData(data);
      },
      (error) => {
        alert(error);
      });
  }
  
  const loadSharedData = async () => {
    await Get(
      'shared_data.json',
      (data) => {
        setSharedData(data);
        document.title = data.basic_info.name;
      },
      (error) => {
        alert(error);
      });
  }  

  React.useEffect(() => {
    loadSharedData();
  }, [])

  if(sharedData.basic_info !== undefined)
  {
    return (
      <div>
        <Header githubLink={sharedData.basic_info.social[0].url}></Header>
        <Intro sharedData={sharedData.basic_info}></Intro>
        <LanguageIcons loadResumeFromPathCallback = {loadResumeFromPath}></LanguageIcons>
      </div>
    )
  }else{
    return(
      <div>Loading..</div>
    )
  }
}