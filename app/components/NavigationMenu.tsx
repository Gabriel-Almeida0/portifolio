'use client';

import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function NavigationMenu() {
  const t = useTranslations('Navigation');
  
  const navItems = [
    { href: "/", label: t('home') },
    { href: "/education", label: t('education') },
    { href: "/services", label: t('services') },
    { href: "/testimonials", label: t('testimonials') },
    { href: "/contact", label: t('contact') },
  ];
  
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          <span>Gabriel</span>
          <span className="text-[#00ffdd] text-glow">Almeida</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-gray-300 hover:text-[#00ffdd] transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
} 