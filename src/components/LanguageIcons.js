import React, { Component } from "react";

class LanguageIcons extends Component {

    changePickedLanguage(pickedLanguage, oppositeLangIconId) {
        this.changeCurrentActiveLang(oppositeLangIconId);
        document.documentElement.lang = pickedLanguage;
        var resumeDataPath = document.documentElement.lang === window.$primaryLanguage ? 'resumeDataEn.json' : 'resumeDataTr.json';
        this.props.loadResumeFromPathCallback(resumeDataPath);
    }
    
    changeCurrentActiveLang(oppositeLangIconId){
        var pickedLangIconId = oppositeLangIconId === window.$primaryLanguageIconId ? window.$secondaryLanguageIconId : window.$primaryLanguageIconId;
        document.getElementById(oppositeLangIconId).removeAttribute("filter", "brightness(40%)");
        document.getElementById(pickedLangIconId).setAttribute("filter", "brightness(40%)");
    }
    
    componentDidMount(){
        this.changePickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId);
    }

    render(){
        return(
            <div className="col-md-12 mx-auto text-center language">
                <div
                    onClick={() =>
                        this.changePickedLanguage(window.$primaryLanguage, window.$secondaryLanguageIconId)
                    }
                    style={{ display: "inline"}}
                >
                    <span
                        className="iconify language-icon mr-5"
                        data-icon="twemoji-flag-for-flag-united-kingdom"
                        data-inline="false"
                        id={window.$primaryLanguageIconId}
                    >
                    </span>
                </div>
                <div
                    onClick={()=> 
                        this.changePickedLanguage(window.$secondaryLanguage, window.$primaryLanguageIconId)
                    }
                    style={{display: "inline"}}
                    >
                    <span
                        className="iconify language-icon"
                        data-icon="twemoji-flag-for-flag-turkey"
                        data-inline="false"
                        id={window.$secondaryLanguageIconId}
                    >
                    </span>
                </div>
            </div>
        )
    }
}

export default LanguageIcons;