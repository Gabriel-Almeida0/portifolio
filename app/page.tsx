'use client';

import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  
  return (
    <main className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold">
              {t('greeting')} <span className="text-[#00ffdd] text-glow">{t('name')}</span>
            </h1>
            <h2 className="text-2xl text-gray-400 animate-typing">
              {t('role')} <span className="text-[#00ffdd] text-glow">{t('job')}</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md">
            {t('description')}
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/Gabriel-Almeida0" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-gray-400 hover:text-[#00ffdd]" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 text-gray-400 hover:text-[#00ffdd]" />
            </Link>
            <Link href="https://www.linkedin.com/in/gabriel-almeida-695b9933b/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-[#00ffdd]" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-[#00ffdd]" />
            </Link>
          </div>
          <div className="flex gap-4">
            <Button className="bg-[#00ffdd] text-black hover:bg-[#00ffdd]/90 hover:scale-105 hover:shadow-lg transition-all duration-300">
              {t('hire')}
            </Button>
            <Button className="bg-[#00ffdd] text-black hover:bg-[#00ffdd]/90 hover:scale-105 hover:shadow-lg transition-all duration-300">
              <Link href="mailto:email@provedor.com.br">
                {t('contact')}
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 rounded-full bg-[#00ffdd]/20 blur-3xl"></div>
          <img
            src="/perfil.png"
            alt="Profile"
            className="relative w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </main>
  )
}

