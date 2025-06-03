'use client';

import { ReactNode, useState, useEffect } from 'react';
import { IntlProvider } from 'next-intl';
import enMessages from '../messages/en.json';
import ptMessages from '../messages/pt.json';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const [locale, setLocale] = useState<string>('en');
  const [messages, setMessages] = useState(enMessages);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Detecta apenas a linguagem do navegador
    const browserLanguage = navigator.language.split('-')[0];
    const supportedLocale = browserLanguage === 'pt' ? 'pt' : 'en';
    setLocale(supportedLocale);
    setMessages(supportedLocale === 'pt' ? ptMessages : enMessages);
    setTimeout(() => {
      setIsLoading(false);
    }, 50);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        {/* Indicador de carregamento opcional aqui, se necessário */}
      </div>
    );
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
} 