'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState<string>('en');

  useEffect(() => {
    // Get current language from localStorage or fall back to browser preference
    const storedLocale = localStorage.getItem('language');
    
    if (storedLocale === 'pt' || storedLocale === 'en') {
      setCurrentLocale(storedLocale);
    } else {
      const browserLanguage = navigator.language.split('-')[0];
      const supportedLocale = browserLanguage === 'pt' ? 'pt' : 'en';
      setCurrentLocale(supportedLocale);
    }
  }, []);
  
  const toggleLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'pt' : 'en';
    setCurrentLocale(newLocale);
    localStorage.setItem('language', newLocale);
    window.location.reload(); // Force reload to apply language change
  };

  return (
    <Button 
      onClick={toggleLanguage} 
      variant="ghost" 
      className="text-gray-300 hover:text-[#00ffdd]"
    >
      {currentLocale === 'en' ? '🇧🇷 PT' : '🇺🇸 EN'}
    </Button>
  );
} 