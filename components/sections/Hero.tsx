import Link from 'next/link';
import Container from '../Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function Hero({ locale }: { locale: string }) {
  const t = getTranslations(locale as Locale);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50/30">
      {/* Bold geometric shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      {/* Angular accent lines */}
      <div className="absolute top-20 left-10 w-1 h-32 bg-gradient-to-b from-primary-500 to-transparent rotate-12"></div>
      <div className="absolute bottom-32 right-20 w-1 h-24 bg-gradient-to-t from-secondary-500 to-transparent -rotate-12"></div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary-500/10 border border-primary-500/20 rounded-full">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-primary-600 uppercase tracking-wider">
                {t.hero.badge}
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
              <span className="block text-neutral-900">{t.hero.headline.split('\n')[0]}</span>
              <span className="block text-primary-500 mt-2">{t.hero.headline.split('\n')[1]}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl leading-relaxed font-medium">
              {t.hero.subtext}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link
                href={`/${locale}/contact`}
                className="btn-primary inline-flex items-center justify-center group"
              >
                <span>{t.hero.ctaPrimary}</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/mobile-app`}
                className="btn-secondary inline-flex items-center justify-center"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-neutral-200">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-neutral-600 font-bold">{t.hero.trust1}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                <span className="text-neutral-600 font-bold">{t.hero.trust2}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                <span className="text-neutral-600 font-bold">{t.hero.trust3}</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:block hidden animate-scale-in delay-300">
            <div className="relative">
              {/* Main card */}
              <div className="card-modern bg-gradient-to-br from-primary-500 to-primary-600 p-12 text-white">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black">Solar Power</h3>
                  <p className="text-white/90 text-lg">Clean energy for your future</p>
                </div>
              </div>
              
              {/* Floating card 1 */}
              <div className="absolute -top-6 -right-6 card-modern bg-white p-6 shadow-2xl animate-float-modern">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-success-500/10 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-success-500 rounded-lg"></div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-neutral-900">100%</div>
                    <div className="text-xs text-neutral-500 font-medium">Renewable</div>
                  </div>
                </div>
              </div>
              
              {/* Floating card 2 */}
              <div className="absolute -bottom-6 -left-6 card-modern bg-secondary-500 text-white p-6 shadow-2xl animate-float-modern delay-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <div className="w-6 h-6 bg-white rounded-lg"></div>
                  </div>
                  <div>
                    <div className="text-2xl font-black">24/7</div>
                    <div className="text-xs text-white/80 font-medium">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
