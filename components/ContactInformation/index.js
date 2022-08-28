import React from 'react';
import { Button } from "@mui/material";
import FilePresentIcon from '@mui/icons-material/FilePresent';
import Image from "next/image";
import { useLanguage } from "../../Context/languageContext";
import languages from '../../utils/languages';
const { ENGLISH, SPANISH } = languages

const pdf = {
    file:{
        [ENGLISH]:  "pdf/Desarrollador CV Tomás Palau Posse.pdf",
        [SPANISH]: "pdf/Developer CV Tomás Palau Posse.pdf"
    },
    name: {
        [ENGLISH]:  "Download CV",
        [SPANISH]: "Descargar CV"
    }
}

export default function ContactInformation(){
    const { language } = useLanguage()
    const redirectToGithub = () => {
        window.open('https://github.com/tomasp92', '_blank')
    }
    const redirectToLinkedin = () => {
        window.open('https://www.linkedin.com/in/tomaspalau/', '_blank')
    }
    return(
        <React.Fragment>
            <section className='section'>
                <h2>{language === ENGLISH ? "Get in touch" : "Contactame"}</h2>
                <div className='actionCalls'>
                    <div className="imageContainer" onClick={redirectToGithub}>
                        <Image width={60} height={60} src="/images/redes/github.png"/>
                    </div>
                    <div className="imageContainer" onClick={redirectToLinkedin}>
                        <Image width={78} height={78} src="/images/redes/linkedin.png"/>
                    </div>
                </div>
                <div className="downloadCV">
                    <Button 
                        startIcon={<FilePresentIcon />} 
                        className="downloadCV" 
                        variant="contained" 
                        href={pdf.file[language]} 
                        target="_blank"
                        color="grey"
                    >
                        {pdf.name[language]}
                    </Button> 
                </div>
            </section>
            <style jsx>{`
                .actionCalls {
                    display: flex;
                    margin: auto 2rem;
                    justify-content: space-between;
                }
                .section{
                    margin: 2rem 3rem;
                    display: flex
                }
                .imageContainer{
                    width: 5rem
                    background-color: green;
                    cursor: pointer;
                    margin: auto;
                }
                .downloadCV{
                    width: 10rem;
                    height: 2rem;
                    border-radius: 50px;
                    margin: auto 5rem;
                }
            `}</style>
        </React.Fragment>
    )
}


