import React from "react";
import WorkIcon from '@mui/icons-material/Work';
import List from "@mui/material/List";
import LaptopIcon from '@mui/icons-material/LaptopMac';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CallIcon from '@mui/icons-material/Call';
import { useLanguage } from "../../Context/languageContext";
import languages from "../../utils/languages";
import LinkedListItem from "./ListItem";

export default function NavBar(){

    const { language }= useLanguage()
    const english = language === languages.ENGLISH
    
    return(
        <>
            <nav>
                <List sx={{ width: '100%', maxWidth: 360 }}>
                    <LinkedListItem icon={<LaptopIcon />} text={english ? "Proyects" : "Proyectos"}  to="proyects" />
                    <LinkedListItem icon={<WorkIcon />} text={english ? "Jobs" : "Trabajos"} to="jobs" />
                    <LinkedListItem icon={<WorkspacePremiumIcon />} text={english ? "Acknoledgments" : "Reconocimientos"} to="acknoledgments" />
                    <LinkedListItem icon={<CallIcon />} text={english ? "About me" : "Sobre Mí"} to="/" />
                </List>
            </nav>
            <style jsx>{`
                nav{
                    color: white;
                    margin: auto;
                    width: 100%;
                    margin: 2rem, 0;
                }
            `}</style>
        </>
    )
}