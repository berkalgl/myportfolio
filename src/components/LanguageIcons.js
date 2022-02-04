import { Icon } from "@iconify/react";
import React from "react";
import '../scss/language-icons.scss';
    
const changePickedLanguage = (pickedLanguage, loadResumeFromPathCallback) => {
    if(document.documentElement.lang !== pickedLanguage)
    {
        document.documentElement.lang = pickedLanguage;
        var resumeDataPath = document.documentElement.lang === window.$primaryLanguage ? 'resumeDataEn.json' : 'resumeDataTr.json';
        loadResumeFromPathCallback(resumeDataPath);
    }
}

export default function LanguageIcons(props){
    const {loadResumeFromPathCallback} = props;

    const lang = document.documentElement.lang;

    return(
        <div className="col-md-12 mx-auto text-center language">
            <div
                onClick={() => changePickedLanguage(window.$primaryLanguage, window.$secondaryLanguageIconId,loadResumeFromPathCallback)}
                style={{ display: "inline"}}
            >
                <Icon 
                    icon="twemoji-flag-for-flag-united-kingdom"
                    data-inline="false"
                    id={window.$primaryLanguageIconId}
                    className="language-icon"
                    style={{ marginRight: 15 }}
                    filter= {lang === window.$primaryLanguage ? "brightness(40%)" : ""}
                />
            </div>
            <div
                onClick={() => changePickedLanguage(window.$secondaryLanguage, window.$primaryLanguageIconId,loadResumeFromPathCallback)}
                style={{display: "inline"}}
            >
                <Icon 
                    icon="twemoji-flag-for-flag-turkey"
                    data-inline="false"
                    id={window.$secondaryLanguageIconId}
                    className="language-icon"
                    filter= {lang === window.$secondaryLanguage ? "brightness(40%)" : ""}
                />
            </div>
        </div>
    )
}