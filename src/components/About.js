import React from 'react';
import { Icon } from "@iconify/react";
import '../scss/about.scss';

function About(props) {
    const { resumeData, sharedData } = props;
  
    return (
        <section id ="about">
            <div className="col-md-12">
                <h1 style={{ color:"black"}}>
                    {resumeData.basic_info.section_name.about}
                </h1>
            </div>
            <div className="col-md-12 row center mx-auto">
                <div className="col-md-4 center">
                    <div className="polaroid">
                        <span style={{ cursor: "auto" }}>
                        <img
                            height="250px"
                            src={"images/"+sharedData.basic_info.image}
                            alt="Avatar placeholder"
                        />
                            <Icon icon="logos:c-sharp" width="40" className="about__icon" />
                            <Icon icon="logos:react" width="40" className="about__icon" />
                            <Icon icon="logos:python" width="40" className="about__icon"/>
                        </span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;
