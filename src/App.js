import React, { useEffect } from "react";
import './App.scss';
import Header from './components/Header';
import LanguageIcons from "./components/LanguageIcons";
import Intro from "./components/Intro";
import About from "./components/About";
import Footer from "./components/Footer";
import {Get} from "./utils/apiHelper";
import { TailSpin } from  'react-loader-spinner';
import Typewriter from 'typewriter-effect';

export default function App() {
  const [resumeData, setResumeData] = React.useState({});
  const [sharedData, setSharedData] = React.useState({});
  const [resumeDataLoaded, setResumeDataLoaded] = React.useState(false);
  const [sharedDataLoaded, setSharedDataLoaded] = React.useState(false);

  const loadResumeFromPath = async (path) => {
    await Get(
      path,
      (data) => {
        setResumeData(data);
        setResumeDataLoaded(true);
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
        setSharedDataLoaded(true);
        document.title = data.basic_info.name;
      },
      (error) => {
        alert(error);
      });
  }  

  React.useEffect(() => {
    loadSharedData();
    loadResumeFromPath('resumeDataEn.json');
  }, [])
  
  if(resumeDataLoaded && sharedDataLoaded)
  {
    return (
      <div>
        <Header githubLink={sharedData.basic_info.social[0].url}></Header>
        <Intro sharedData={sharedData.basic_info}></Intro>
        <LanguageIcons loadResumeFromPathCallback = {loadResumeFromPath}></LanguageIcons>
        <About resumeData={resumeData} sharedData={sharedData}></About>
        <Footer sharedData={sharedData.basic_info}></Footer>
      </div>
    )
  }else{
    return(
      <div>
        <div className="loader-parent"></div>
        <div className="loader">
          <TailSpin color="#353239" height={150} width={150} className="loader"/>
          <div className="loader-text">
            <div>Loading</div>
            <div>
              <Typewriter
                options={{
                  strings: ['...'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  cursor: ''
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}