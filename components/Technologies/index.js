import React from "react"
import Masonry from '@mui/lab/Masonry';
import { useLanguage } from "../../Context/languageContext";
import languages from '../../utils/languages';
const { ENGLISH } = languages
export default function Technologies(){
    const { language } = useLanguage()
    return(
        <React.Fragment>
            <section>
                <div className="titleContainer">
                    <h2>{language === ENGLISH ? "Technologies" : "Tecnologías"}</h2>
                </div>
                <Masonry columns={4} spacing={{ xs: 0.5, sm: 0.5, md: 0.5, lg: 0.5}}>
                    <div className="imageContainer">
                        <img className="imgReallyBig" src="images/technologies/react.png"/>
                    </div>
                    <div className="imageContainer">
                        <img className="imgReallySmall" src="images/technologies/c.png"/>
                    </div>
                    <div className="imageContainer">
                        <img className="imgBig" src="images/technologies/css.png"/>
                    </div>
                    <div className="imageContainer">
                        <img  className="imgBig" src="images/technologies/firebase.png"/>
                    </div>
                    <div className="imageContainer">
                        <img className="imgReallyBig" src="images/technologies/js.png"/>
                    </div>
                    <div className="imageContainer">
                    <img className="imgMedium" src="images/technologies/node.png"/>
                    </div>
                    <div className="imageContainer">
                        <img className="imgBig" src="images/technologies/html.png"/>
                    </div>
                    <div className="imageContainer">
                        <img className="imgMedium" src="images/technologies/mysql.png"/>
                    </div>
                    <div className="imageContainer">
                    <img className="imgBig" src="images/technologies/next.png"/>
                    </div>
                    <div className="imageContainer">
                        <img className="imgSmall" src="images/technologies/mongo.png"/>
                    </div>
                    <div className="imageContainer">
                        <img className="imgSmall" src="images/technologies/python.png"/>
                    </div>
                    <div className="imageContainer">
                        <img  className="imgReallySmall" src="images/technologies/php.png"/>
                    </div>
                </Masonry>
            </section>
            <style jsx>{`
                section{
                    width: 50%;
                }
                .titleContainer{
                    text-align: center;
                }
                .imageContainer{
                    display: flex;
                    width: 5rem
                    padding: 1rem auto;
                    text-algin: center !important;
                    align-content: center;
                }
                img {
                    margin: auto;
                    padding: auto auto;
                    text-align: center;
                }
                .imgReallyBig{
                    width: 9rem 
                }
                .imgBig{
                    width: 6rem 
                }
                .imgMedium{
                    width: 5rem;
                }
                .imgSmall{
                    width: 4rem;
                }
                .imgReallySmall{
                    width: 2rem;
                }
            `}</style>
        </React.Fragment>
    )
}