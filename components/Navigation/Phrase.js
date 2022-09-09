import languages from '../../utils/languages';
import { useLanguage } from "../../Context/languageContext";

const { ENGLISH, SPANISH } = languages

const phrase = {
  [ENGLISH]: '“Hard work beats talent, when talent doesn´t work hard.”',
  [SPANISH]: "El trabajo duro vence al talento cuando el talento no trabaja duro!"
}

export default function Phrase(){
    const {language} = useLanguage()
    return(
        <>
            <div className="bottomText">
                <h3>{phrase[language]}</h3>
                <h4>Tim Notke</h4>
            </div>
            <style jsx>{`
                h3{
                    color: white;
                    font-size: 0.8rem;
                    margin-top: 0;
                    margin-bottom: 0;
                }
                h4{
                    color: white;
                    font-size: 0.7rem;
                    align-self: flex-end;
                    margin-top: 0;
                }
                .bottomText{
                    left: 2rem;
                }
            `}</style>
        </>
    )
}