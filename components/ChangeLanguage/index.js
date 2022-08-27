import React, { useState } from "react"
import { useLanguage } from "../../Context/languageContext"
import languages from '../../utils/languages';
const { ENGLISH } = languages

const ChangeLanguage = ()=>{
    const {language, toggleLanguage}= useLanguage()
    const [bothShown, setBothShown] = useState(false)
    
    const changeLanguage = () => {
        toggleLanguage()
        setBothShown(false)
    }

    const toggleShowBothFlags = (showBoth) => {
        setBothShown(showBoth)
    }

    const spanishFlag = <div onClick={()=>changeLanguage()}> <img src='images/banderas/spain.png' alt='spain flag' /></div>
    const englishFlag = <div onClick={()=>changeLanguage()}> <img src='images/banderas/united_states.png' alt='us flag' /></div>
    
    return(
        <>
            <div 
                className='languageChoice' 
                onMouseEnter={() => toggleShowBothFlags(true)} 
                onMouseLeave={() => toggleShowBothFlags(false)}
            >
                {
                    bothShown ? <div className='bothShown'> {spanishFlag} {englishFlag} </div> : language === ENGLISH ? englishFlag : spanishFlag
                }
            </div>
            <style jsx>{`
                .bothShown{
                    display: flex;
                    flex-direction: row;
                    width: 75px;
                    justify-content: space-around;
                }
                .languageChoice{
                    display: flex;
                    flex-direction: row;
                    position: fixed;
                    width: max-content;
                    background-color: rgb(100, 100, 100);
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                    justify-content: space-around;
                    align-items: center;
                    margin: auto;
                    padding: auto;
                    padding-left: 5px;
                    top: 50%;
                    right: 0;
                    height: 40px;
                    cursor: pointer;
                    z-index: 300;
                }
            `}</style>
        </>
    )
}
export default ChangeLanguage