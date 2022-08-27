import Whatsapp from '../Whatsapp';
import Head from 'next/head'
import LeftNavigation from '../LeftNavigation';
import LanguangeContextProvider from '../LanguageProvider';
import ChangeLanguage from './../ChangeLanguage/index';


export default function AppWrapper({ children }) {
    return (
        <>
            <Head>
                <title>Tomás Palau Posse | web developer</title>
                <meta name="description" content="Web developer" />
                <link rel="icon" href="/images/foto-yo.png" /> 
            </Head>
            <LanguangeContextProvider >
                <div className='mainContent'>
                    <LeftNavigation />
                    <div >
                        <div >
                            {children}
                        </div>
                    </div>
                </div>
                <Whatsapp />
                <ChangeLanguage />
            </LanguangeContextProvider>
            <style jsx>{`
                .mainContent{
                    display: flex;
                    flex-direction: row;
                    position: absolute;
                    height: 100%;
                }
            `}</style>
        </>
    )
}