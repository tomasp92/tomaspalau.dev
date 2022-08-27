import Image from "next/image";
import { useLanguage } from "../../Context/languageContext";
import languages from '../../utils/languages';
const { ENGLISH, SPANISH } = languages

const text = {
  [ENGLISH]: "Hello%20Tomás!%20I%20wanted%20to%20know%20more%20about%20about%20your%20developer%20skills!",
  [SPANISH]: "Hola%20Tomás!%20Quer%C3%ADa%20saber%20mas%20sobre%20tu%20carrera%20como%20programador!"
}

export default function Whatsapp(){
  const {language} = useLanguage()
  
  return(
    <>
      <div id="whatsapp" className="whatsapp">
          <i className="fab fa-whatsapp"></i>
          <a href={"https://api.whatsapp.com/send?phone=+5491131745215&text=" + text[language]}
              target="_blank" rel="noreferrer">
              <Image src="/images/redes/whatsapp.png" alt="link a whatsapp" width={65} height={65} />
          </a>
      </div>
      <style jsx>{`
        .whatsapp{
          position: fixed;
          bottom: 29px;
          right: 10px;
        }
      `}</style>
    </>
  )
}