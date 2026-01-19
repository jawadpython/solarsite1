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
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href={`/${locale}`} className="text-xl font-bold text-neutral-900 hover:text-primary-600 transition-colors">
              TAWFIR <span className="text-primary-600">ENERGY</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-[12px] text-sm font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/${locale}/contact`}
              className="ml-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-2.5 rounded-[16px] text-sm font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
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
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
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
          <div className="md:hidden pb-4 pt-2 border-t border-neutral-200 bg-white">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-4 py-3 rounded-[12px] text-sm font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={`/${locale}/contact`}
                onClick={closeMenu}
                className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-3 rounded-[16px] text-sm font-semibold hover:shadow-lg transition-all duration-300 w-full mt-2 text-center"
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
