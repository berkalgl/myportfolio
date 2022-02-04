import React from "react";
import Typical from "react-typical";
import { Icon } from '@iconify/react';
import Typewriter from 'typewriter-effect';
import Social from "./Social";
import '../scss/intro.scss';

const HeaderTitleTypeAnimationComponent = React.memo((titles)=>{

    const converted = Object.values(titles)[0];

    return(
        <div className="title-container">
        <Typewriter
          options={{
            strings: converted,
            autoStart: true,
            loop: true,
            delay: 50,
            wrapperClassName: 'title-styles',
            cursorClassName: 'title-styles',
          }}
        />
        </div>
    )}, (props,prevProp) => true);

export default function Intro(props){
  const {sharedData} = props;
  const [name] = React.useState(sharedData.name);
  const [titles] = React.useState(sharedData.titles);
  const [socials] = React.useState(sharedData.social);

  return(

    <div id="intro" style={{ height: window.innerHeight - 140, display: 'block' }}>
        <div className="row aligner" style={{ height: '100%'}}>
            <div className="col-md-12">
                <div>
                    <Icon icon="la:laptop-code" width="150" hFlip={true} className="" />
                    <h1 className="mb-0">
                        <Typical steps={[name]} wrapper="p"/>
                    </h1>
                    <HeaderTitleTypeAnimationComponent titles={titles}></HeaderTitleTypeAnimationComponent>
                    <Social socials={socials} className="social-links-intro"></Social>
                </div>
            </div>
        </div>
    </div>
  )

}