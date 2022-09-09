import React from "react";
import NavBar from "../NavBar";
import Phrase from "./Phrase";
import Title from './Title';
import Image from "next/image";
import { useWindowWidth, sizes } from "../../hooks/useWindowWidth";
const { LL: largeLaptop } = sizes


export default function LeftNavigation(){
    const windowWidth = useWindowWidth()
    return (
        <>
            <div className="drawerContainer">
                <div className="drawer" >
                    <div>
                        <div>
                            <Image className="img" width={110} height={170} src="/images/foto-yo.png"/>
                        </div>
                        <Title />
                    </div>
                    <NavBar />
                    <Phrase />
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
                .drawer div .img{
                    width: 60%;
                    margin: auto
                }
            `}</style>
        </>
    )
}