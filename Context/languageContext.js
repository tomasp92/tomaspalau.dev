import React, {useState} from 'react';
import languages from '../utils/languages';
const { ENGLISH, SPANISH } = languages
const LanguageContext = React.createContext();

export function LanguageProvider({children}) {
    const [language, setLanguage] = useState(ENGLISH)

    const toggleLanguage = ()=>{
        setLanguage(prevLanguage=>{
            return prevLanguage === ENGLISH ? SPANISH : ENGLISH
        })
    }
    const value = React.useMemo(()=>{
        return({
            language,
            toggleLanguage
        })
    },[language, toggleLanguage])
    return(<LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>)
}

export function useLanguage(){
    const context = React.useContext(LanguageContext)
    if(!context){
        throw new Error('useLanguage must be used within a LanguageProvider')
    } 
    return context
}