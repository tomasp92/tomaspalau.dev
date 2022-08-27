
import Technologies from "../components/Technologies";
import { useLanguage } from "../Context/languageContext";
import languages from '../utils/languages';
import { AboutMeText} from './../components/AboutMeText/index';
import ContactInformation from './../components/ContactInformation/index';
const { ENGLISH, SPANISH } = languages
const title = {
    [ENGLISH]:  "Is a developer valuable  just for his technical skills?",
    [SPANISH]: "¿Es un programador valioso tan solo por sus capacidades técnicas?"
}
export default function Contact() {
    const { language }= useLanguage()
    return(
        <>
            <h1 className="title">
                {title[language]}
            </h1>
            <div className="aboutMeBody">
                <div className="aboutMeSection">
                    <AboutMeText />
                </div>
                <Technologies />    
                <ContactInformation />
            </div>
            <style jsx>{`
                .aboutMeBody{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    margin: 0 3rem;
                }
                .aboutMeSection{
                    max-width: 50%
                }
                .text{
                    max-width: 25rem
                }
                .title{
                    backgroundColor: "#3366FF";
                    text-align: center;
                    margin: auto auto;
                    margin-top: 2rem;
                }
                
            `}</style>
        </>
    )
}