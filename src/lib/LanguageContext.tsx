import React, { createContext, useContext, useEffect, useState } from 'react';
import { type Language, DEFAULT_LANGUAGE } from './i18n';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 1. Check localStorage first
        const savedLang = localStorage.getItem('site_language') as Language;

        if (savedLang && (savedLang === 'en' || savedLang === 'zh')) {
            setLanguageState(savedLang);
        } else {
            // 2. Check browser language if no preference saved
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.startsWith('zh')) {
                setLanguageState('zh');
            } else {
                setLanguageState('en');
            }
        }
        setIsLoading(false);
    }, []);

    const setLanguage = (lang: Language) => {
        console.log('Setting language to:', lang);
        setLanguageState(lang);
        localStorage.setItem('site_language', lang);
        document.documentElement.classList.remove('lang-en', 'lang-zh');
        document.documentElement.classList.add(`lang-${lang}`);
        console.log('Updated html class list:', document.documentElement.classList.value);
        // Dispatch a custom event so other instances know
        window.dispatchEvent(new CustomEvent('language-change', { detail: { language: lang } }));
    };

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'zh' : 'en');
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isLoading }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
