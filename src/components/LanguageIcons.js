import { Icon } from "@iconify/react";
import React from "react";
    
const changePickedLanguage = (pickedLanguage, oppositeLangIconId, loadResumeFromPathCallback) => {
    if(document.documentElement.lang !== pickedLanguage)
    {
        var pickedLangIconId = oppositeLangIconId === window.$primaryLanguageIconId ? window.$secondaryLanguageIconId : window.$primaryLanguageIconId;
        if(document.getElementById(oppositeLangIconId) !== null && document.getElementById(pickedLangIconId) !== null)
        {
            document.getElementById(oppositeLangIconId).removeAttribute("filter", "brightness(40%)");
            document.getElementById(pickedLangIconId).setAttribute("filter", "brightness(40%)");
        }

        document.documentElement.lang = pickedLanguage;
        var resumeDataPath = document.documentElement.lang === window.$primaryLanguage ? 'resumeDataEn.json' : 'resumeDataTr.json';
        loadResumeFromPathCallback(resumeDataPath, appComponent);
    }
}

export default function LanguageIcons(props){
    const {loadResumeFromPathCallback} = props;

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
                    filter= "brightness(40%)"
                />
            </div>
            <div
                onClick={() => changePickedLanguage(window.$secondaryLanguage, window.$primaryLanguageIconId,loadResumeFromPathCallback, appComponent)}
                style={{display: "inline"}}
                >
                    <Icon 
                        icon="twemoji-flag-for-flag-turkey"
                        data-inline="false"
                        id={window.$secondaryLanguageIconId}
                        className="language-icon"
                    />
            </div>
        </div>
    )
}