import React from "react";
import { useWindowWidth, sizes } from "../../hooks/useWindowWidth";
import LeftNavigation from "./LeftNavigation";
import CellphoneMenu from './CellphoneMenu';
const { LM: computer } = sizes

export default function Navigation(){
    const windowWidth = useWindowWidth()
    return(
        <>
            { windowWidth >= computer ? 
                <LeftNavigation /> :
                <CellphoneMenu />
            }
        </>
    )
}