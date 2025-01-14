'use client'

import React, { createContext, useState, useContext } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (lang === 'es') {
      window.history.pushState(null, '', '/?lang=es');
    } else {
      window.history.pushState(null, '', '/');
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
