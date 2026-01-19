'use client';

import { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from './Container';
import LanguageSwitcher from './LanguageSwitcher';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function Navbar({ locale }: { locale: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const t = useMemo(() => getTranslations(locale as Locale), [locale]);

  const navLinks = [
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/mobile-app`, label: t.nav.mobileApp },
    { href: `/${locale}/partners`, label: t.nav.partners },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200/50">
      <Container>
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href={`/${locale}`} className="text-3xl font-black text-primary-500 hover:text-primary-600 transition-colors">
              Tawfir<span className="text-secondary-500">Energy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 ${
                  isActive(link.href)
                    ? 'text-primary-500 bg-primary-50'
                    : 'text-neutral-700 hover:text-primary-500 hover:bg-neutral-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/${locale}/contact`}
              className="btn-primary ml-4 text-base px-6 py-2.5"
            >
              {t.nav.getQuote}
            </Link>
            <div className="ml-4">
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-900"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            type="button"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-4 border-t border-neutral-200 bg-white">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
                    isActive(link.href)
                      ? 'text-primary-500 bg-primary-50'
                      : 'text-neutral-700 hover:text-primary-500 hover:bg-neutral-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={`/${locale}/contact`}
                onClick={closeMenu}
                className="btn-primary w-full mt-4 text-center"
              >
                {t.nav.getQuote}
              </Link>
              <div className="pt-4 border-t border-neutral-200">
                <LanguageSwitcher currentLocale={locale} />
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
