import { useLanguage } from "../../Context/languageContext";
import languages from '../../utils/languages';
import React from 'react';
const { ENGLISH, SPANISH } = languages

const textAboutMe = {
    [ENGLISH]: {
        presentation: "I'm Tomás Palau, a Full Stack developer with more than a year of programming experience. ",
        knoledge: "In this time I gained a lot of knoledge by ", 
        fast: "working for companies with a fast developing pace.", 
        however: "However, ", 
        notOnly: "my skills are not only technical", 
        beforePrograming: ", since before being a programmer I dedicated myself to psychology, developing ", 
        softSkills: "soft skills", 
        become: " that helped me become a person with ",
        leadership: "leadership", 
        oriented: ", oriented towards ",
        help: "helping others to grow",
        and: " , and a ",
        teamWorker: "team worker.", 
        coaching: "My interest in coaching and my curiosity lead me to seek new learning every day to grow as a person and as a professional. To achieve in this way to ",
        contribute: "contribute greater value every day of my life."
    },
    [SPANISH]:{
        presentation: "Soy Tomás Palau, desarrollador Full Stack con más de un año de experiencia programando. ",
        knoledge:  "En este lapso de tiempo adquirí muchos conocimientos ", 
        fast:  "trabajando para empresas con un acelerado ritmo de desarrollo.",
        however:  "Sin embargo, ",
        notOnly: "mis habilidades no son solo técnicas, ",
        beforePrograming: "ya que antes de ser programador me dediqué a la psicologí    a desarrollando ",
        softSkills: "habilidades blandas", 
        become: " que me ayudaron a convertirme en una persona con ",
        leadership: "liderazgo", 
        oriented: ", orientada a ",
        help: "ayudar a crecer a los demás",
        and: " , y que ",
        teamWorker: "trabaja en equipo.", 
        coaching:  "Mi interés por el coaching y mi curiosidad me llevan a buscar cada día nuevos aprendizajes para crecer como persona y como un profesional. Buscando de esta manera, ",
        contribute: "aportar mayor valor cada día de mi vida."
    }
}


function AboutMeText(){

    const {language}= useLanguage()
    const { presentation, knoledge, fast, however, notOnly, beforePrograming, softSkills, become, leadership, oriented, help, and, teamWorker, coaching, contribute} = textAboutMe[language]

    return (
        <React.Fragment>
            <section className="text">
                <p>
                    {presentation}
                    {knoledge}
                    <span className="peace">
                        {fast}
                    </span>
                </p>
                <p>
                    {however}
                    <span className="skills">
                        {notOnly}
                    </span>
                    {beforePrograming}
                    <span className="skills">
                        {softSkills}
                    </span>
                    {become}
                    <span className="skills">
                        {leadership}
                    </span>
                    {oriented}
                    <span className="skills">
                        {help}
                    </span>
                    {and} 
                    <span className="skills">
                        {teamWorker}
                    </span>
                </p>
                <p>
                    {coaching}
                    <span className="contribute">
                        {contribute}
                    </span>
                </p>
            </section>
            <style jsx>{`
                .skills{
                    color: red;
                }
                .contribute{
                    color: orange;
                }
                .peace{
                    color: #3366FF;
                }
                .text{
                    width:80%;
                    margin: auto;
                }
            `}</style>
        </React.Fragment>

    )
}

function SecondTextSection(){
    const {language}= useLanguage()
    const { presentation, knoledge, fast, however, notOnly, beforePrograming, softSkills, become, leadership, oriented, help, and, teamWorker, coaching, contribute} = textAboutMe[language]
    return(
        <React.Fragment>
            <p>
                {however}
                <span className="skills">
                    {notOnly}
                </span>
                {beforePrograming}
                <span className="skills">
                    {softSkills}
                </span>
                {become}
                <span className="skills">
                    {leadership}
                </span>
                {oriented}
                <span className="skills">
                    {help}
                </span>
                {and} 
                <span className="skills">
                    {teamWorker}
                </span>
            </p>
            <style jsx>{`
                .skills{
                    color: red;
                }
                .contribute{
                    color: orange;
                }
                .peace{
                    color: #3366FF;
                }
                .text{
                    width:80%;
                    margin: auto;
                }
            `}</style>
        </React.Fragment>
    )
}

function ThirdTextSection(){
    const {language}= useLanguage()
    const { presentation, knoledge, fast, however, notOnly, beforePrograming, softSkills, become, leadership, oriented, help, and, teamWorker, coaching, contribute} = textAboutMe[language]
    return(
        <React.Fragment> 
            <div>
                <p>
                    {coaching}
                    <span className="contribute">
                        {contribute}
                    </span>
                </p>
            </div>
            <style jsx>{`
                .skills{
                    color: red;
                }
                .contribute{
                    color: orange;
                }
                .peace{
                    color: #3366FF;
                }
                .text{
                    width:80%;
                    margin: auto;
                }
            `}</style>
        </React.Fragment>
    )
}

export { AboutMeText, SecondTextSection, ThirdTextSection }