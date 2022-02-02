import React from 'react';
import Button from 'react-bootstrap/Button';
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
                <div className="col-md-6">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="icon-group">
                                    <Icon icon="emojione:red-circle" />
                                    <Icon icon="twemoji:yellow-circle" />
                                    <Icon icon="twemoji:green-circle" />
                                </div>
                            </div>
                            <div className="card-body font-trebuchet text-justify ml-3 mr-3">
                                <span className="wave">{resumeData.basic_info.description_header} 👋 </span>
                                <p>{resumeData.basic_info.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 cv-button-group">
                        <Button href={"/ResumeFolder/"+sharedData.basic_info.resume} className="cv-button" variant="outlined" target='_blank'>
                            <Icon icon="carbon:document" width="25" />
                            <small>Download my CV</small>
                        </Button>
                        <Button href={"mailto:"+sharedData.basic_info.email} className="cv-button" variant="outlined" target='_blank'>
                            <Icon icon="bx:bx-mail-send" width="25" />
                            <small>Mail me</small>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
