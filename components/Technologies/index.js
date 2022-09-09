import React from "react"
import Masonry from '@mui/lab/Masonry';
import { useLanguage } from "../../Context/languageContext";
import languages from '../../utils/languages';
import Image from "next/image";
import { height } from "@mui/system";
const { ENGLISH } = languages

const techImages = [
    {
        src: "/images/technologies/react.png",
        /* width: 500,
        height: 500, */
        width: 1,
        height: 1,
        category: 4
    },
    {
        src: "/images/technologies/c.png",
        /* width: 1344,
        height: 1456, */
        width: 1,
        height: 1.083,
        category: 0
    },
    {
        src: "/images/technologies/css.png",
        /* width: 969,
        height: 1080, */
        width: 1,
        height: 1.114, 
        category: 3
    },
    {
        src: "/images/technologies/firebase.png",
        /* width: 1200,
        height: 321, */
        width: 1,
        height: 0.2675,
        category: 3
    },
    {
        src: "/images/technologies/js.png",
        /* width: 540,
        height: 540, */
        width: 1,
        height: 1,
        category: 4
    },
    {
        src: "/images/technologies/node.png",
        /* width: 1600,
        height: 1241, */
        width: 1,
        height: 0.77,
        category: 2
    },
    {
        src: "/images/technologies/html.png",
        /* width: 903,
        height: 1080, */
        width: 1,
        height: 1.196,
        category: 3
    },
    {
        src: "/images/technologies/mysql.png",
        /* width: 754,
        height: 500, */
        width: 1,
        height: 0.663,
        category: 2
    },
    {
        src: "/images/technologies/next.png",
        /* width: 311,
        height: 186, */
        width: 1,
        height: 0.598,
        category: 2
    },
    {
        src: "/images/technologies/mongo.png",
        /* width: 750,
        height: 750, */
        width: 1,
        height: 1,
        category: 1
    },
    {
        src: "/images/technologies/python.png",
        /* width: 512,
        height: 512, */
        width: 1,
        height: 1,
        category: 1
    },
    {
        src: "/images/technologies/php.png",
        /* width: 1280,
        height: 691,*/
        width: 1,
        height: 0.539,
        category: 0
    }

]

export default function Technologies() {
    const { language } = useLanguage()
    return (
        <React.Fragment>
            <section>
                <div className="titleContainer">
                    <h2>{language === ENGLISH ? "Technologies" : "Tecnologías"}</h2>
                </div>
                <Masonry columns={4} spacing={{ xs: 0.5, sm: 0.5, md: 0.5, lg: 0.5 }}>
                    {
                        techImages.map((img, i)=>
                            <div className="imageContainer" key={img + i}>
                                <Image className="techImg" src={img.src} width={img.width*30*(img.category*15+1)} height={img.height*30*(img.category*15+1)} />
                            </div>
                        )
                    }
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
                .techImg {
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