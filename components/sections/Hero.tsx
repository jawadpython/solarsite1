import Link from 'next/link';
import Container from '../Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function Hero({ locale }: { locale: string }) {
  const t = getTranslations(locale as Locale);
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full">
              <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-primary-700">
                {t.hero.badge}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-tight">
              {t.hero.headline.split('\n')[0]}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                {t.hero.headline.split('\n')[1]}
              </span>
            </h1>
            
            <p className="text-xl text-neutral-600 max-w-xl leading-relaxed">
              {t.hero.subtext}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={`/${locale}/contact`}
                className="btn-primary inline-flex items-center justify-center text-center"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href={`/${locale}/mobile-app`}
                className="btn-secondary inline-flex items-center justify-center text-center"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-sm text-neutral-600 font-medium">{t.hero.trust1}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                <span className="text-sm text-neutral-600 font-medium">{t.hero.trust2}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-600 rounded-full"></div>
                <span className="text-sm text-neutral-600 font-medium">{t.hero.trust3}</span>
              </div>
            </div>
          </div>

          {/* Right - App-style Banner Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 rounded-[24px] p-8 md:p-12 text-white relative overflow-hidden shadow-[0_8px_24px_rgba(14,165,233,0.3)]">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="text-xl md:text-2xl font-semibold text-white/95 leading-relaxed">
                  {locale === 'ar' ? 'دراسة، توريد، تركيب وصيانة' : 'Étude, fourniture, installation & maintenance'}
                </div>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-block bg-white text-primary-700 px-8 py-4 rounded-[16px] font-semibold hover:bg-neutral-50 hover:shadow-lg transition-all duration-300 text-center"
                >
                  {t.hero.ctaPrimary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
