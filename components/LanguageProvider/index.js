import React from 'react';
import { LanguageProvider } from '../../Context/languageContext';


export default function LanguangeContextProvider({ children }) {

    return (
        <LanguageProvider>
            <main>
                {children}
            </main>
        </LanguageProvider>
    )
}

