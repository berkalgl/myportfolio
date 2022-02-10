import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Icon } from '@iconify/react';
import Badge from "react-bootstrap/Badge";
import '../scss/work-experience.scss';

const FirstIconStyle = { background: 'rgb(174, 148, 79)', color: 'rgb(255, 255, 255)', textAlign: 'center' }

const MainTechElement = mainTechs => {
    return(
        mainTechs.mainTechs.map((mainTech, i) => {
            return(
                <Badge pill className="main-badge mr-2 mb-2" key={i}>
                    {mainTech}
                </Badge>
            )
        })
    )
}

const TechElement = techs => {
    return(
        techs.techs.map((tech,i) => {
            return(
                <Badge pill className="experience-badge mr-2 mb-2" key={i}>
                    {tech}
                </Badge>
            )
        })
    )
}

const WorkExperienceElements = experiences => {
    if(experiences.experiences !== undefined)
    {
        return(
            experiences.experiences.map(function (experience,i) {
                return(
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={experience.years}
                        iconStyle={{
                          background: "#AE944F",
                          color: "#fff",
                          textAlign: "center",
                        }}
                        icon={<i className="fab fa-angular experience-icon"></i>}
                        key={i}
                    >
                        <div style={{ textAlign: "left", marginBottom: "4px" }}>
                            <MainTechElement mainTechs={experience.mainTech}></MainTechElement>
                        </div>
    
                        <h3
                            className="vertical-timeline-element-title"
                            style={{ textAlign: "left" }}
                        >
                            {experience.title}
                        </h3>
                        <h4
                            className="vertical-timeline-element-subtitle"
                            style={{ textAlign: "left" }}
                        >
                            {experience.company}
                        </h4>
                        <div style={{ textAlign: "left", marginTop: "15px" }}>
                            <TechElement techs={experience.technologies}></TechElement>
                        </div>
        
                    </VerticalTimelineElement>
                )
            })

        )
    }
}

function WorkExperience(props) {
    const {resumeData} = props;

    if(resumeData !== undefined)
    {
        return (
            <section id="workexperience" className="pb-5">
                <div className="col-md-12 mx-auto">
                    <h1 className="section-title text-black" style={{color:"black", textAlign:"center"}}>
                        {resumeData.basic_info.section_name.experience}
                    </h1>
                </div>
                <div className="col-md-8 mx-auto">
                    <VerticalTimeline>
                        <WorkExperienceElements experiences={resumeData.experience}></WorkExperienceElements>
                        <VerticalTimelineElement
                            iconStyle={FirstIconStyle}
                            icon={<Icon icon="bytesize:work" />}
                        />
                    </VerticalTimeline>
                </div>
            </section>
        )
    }
}

export default WorkExperience;
