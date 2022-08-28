import React, { useState } from "react";
import NavBar from "../NavBar";
import languages from '../../utils/languages';
import { useLanguage } from "../../Context/languageContext";
import Image from "next/image";
const { ENGLISH, SPANISH } = languages

const phrase = {
  [ENGLISH]: '“Hard work beats talent, when talent doesn´t work hard”.',
  [SPANISH]: "El trabajo duro vence al talento cuando el talento no trabaja duro!"
}

const webDev = {
    [ENGLISH]: 'Web Developer',
    [SPANISH]: "Programador Web"
  }
const texto = '“Hard work beats talent, when talent doesn´t work hard”.'


export default function (){
    const {language} = useLanguage()
    
    return (
        <>
            <div className="drawerContainer">
                <div className="drawer" >
                    <div>
                        <div>
                            <Image className="img" width={100} height={140} src="/images/foto-yo.png"/>
                        </div>
                        <div>
                            <h1>Tomás Palau Posse</h1>
                            <h2>{webDev[language]}</h2>
                        </div>
                    </div>
                    <NavBar />
                    <div className="bottomText">
                        <h3>{phrase[language]}</h3>
                        <h4>Tim Notke</h4>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .drawerContainer{
                    width: 370px;
                }
                .drawer {
                    position: fixed;
                    max-width: 230px;
                    height: 100%;
                    background-color: black;
                    display: flex;
                    bottom:0;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .drawer div{
                    justify-self: flex-start;
                    display: flex;
                    flex-direction: column;
                    width: 85%;
                    margin: auto
                }
                .drawer div div{
                    color: white;
                    margin: auto;
                    justify-content: center;
                    align-self: center;
                }
                h1{
                    font-size: 1rem;
                }
                h2{
                    font-size: 0.9rem;
                    align-self: center;
                    margin-top: 0;
                }
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
                .drawer div .img{
                    width: 60%;
                    margin: auto
                }
            `}</style>
        </>
    )
}