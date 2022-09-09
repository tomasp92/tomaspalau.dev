import languages from '../../utils/languages';
import { useLanguage } from "../../Context/languageContext";
import Image from "next/image";
const { ENGLISH, SPANISH } = languages

const webDev = {
    [ENGLISH]: 'Web Developer',
    [SPANISH]: "Programador Web"
}


export default function Title(){
    const {language} = useLanguage()
    
    return (
        <>
            <div className='text'>
                <h1>Tomás Palau Posse</h1>
                <h2>{webDev[language]}</h2>
            </div>
            <style jsx>{`
                .text{
                    margin: auto;
                    color: white;
                    margin: auto;
                    justify-content: center;
                    align-self: center;
                    padding: auto;
                }
                h1{
                    font-size: 1rem;
                    justify-content: center;
                    align-self: center;
                }
                h2{
                    font-size: 0.9rem;
                    align-self: center;
                    margin: 2 2;
                    padding: auto auto
                    margin-top: 0;
                    justify-content: center;
                    align-self: center;
                    text-align: center;
                }
            `}</style>
        </>
    )
}