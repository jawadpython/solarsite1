import Link from 'next/link';
import Image from 'next/image';
import Container from '../Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function MobileApp({ locale }: { locale: string }) {
  const t = getTranslations(locale as Locale);
  
  const features = [
    {
      title: t.mobileApp.feature1.title,
      description: t.mobileApp.feature1.description,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: t.mobileApp.feature2.title,
      description: t.mobileApp.feature2.description,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: t.mobileApp.feature3.title,
      description: t.mobileApp.feature3.description,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: t.mobileApp.feature4.title,
      description: t.mobileApp.feature4.description,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: t.mobileApp.feature5.title,
      description: t.mobileApp.feature5.description,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];
  
  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-solar-500/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" aria-hidden="true" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 border border-white/20">
              <svg className="w-5 h-5 text-solar-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-semibold text-white/90">{t.mobileApp.badge}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {t.mobileApp.title.split('\n')[0]}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-400 to-solar-300">
                {t.mobileApp.title.split('\n')[1]}
              </span>
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed mb-8">
              {t.mobileApp.description}
            </p>
            
            {/* Features list */}
            <div className="space-y-4 mb-8">
              {features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 group-hover:bg-solar-500/20 rounded-xl flex items-center justify-center text-solar-400 transition-colors border border-white/10 group-hover:border-solar-500/30">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/mobile-app`}
                className="bg-solar-500 hover:bg-solar-400 text-neutral-900 px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-solar-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-center inline-flex items-center justify-center gap-2"
              >
                {t.mobileApp.cta1}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 text-center inline-flex items-center justify-center gap-2"
              >
                {t.mobileApp.cta2}
              </Link>
            </div>
          </div>

          {/* Phone Mockup Side */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-solar-500/20 rounded-[3rem] blur-3xl scale-75" aria-hidden="true" />
              
              {/* Phone frame */}
              <div className="relative w-[280px] md:w-[320px]">
                <div className="relative bg-neutral-900 rounded-[2.5rem] p-3 shadow-2xl border border-neutral-700">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-neutral-900 rounded-b-2xl z-10" />
                  
                  {/* Screen */}
                  <div className="bg-gradient-to-br from-primary-50 to-white rounded-[2rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="bg-gradient-to-r from-primary-800 to-primary-700 h-10 flex items-center justify-between px-6 text-white text-xs font-semibold pt-2">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="flex gap-0.5">
                          <div className="w-1 h-2 bg-white rounded-sm"></div>
                          <div className="w-1 h-3 bg-white rounded-sm"></div>
                          <div className="w-1 h-4 bg-white rounded-sm"></div>
                          <div className="w-1 h-3 bg-white/50 rounded-sm"></div>
                        </div>
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17 7H7c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H7V9h10v6z"/>
                          <path d="M20 10h2v4h-2z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* App content mockup */}
                    <div className="p-4 space-y-4 h-[400px] md:h-[460px]">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-lg font-bold text-neutral-900">TAWFIR</div>
                          <div className="text-xs text-neutral-500">
                            {locale === 'ar' ? 'مرحباً بك' : 'Bienvenue'}
                          </div>
                        </div>
                        <div className="w-10 h-10 bg-solar-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-solar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Calculator card */}
                      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-4 text-white">
                        <div className="text-xs opacity-80 mb-1">
                          {locale === 'ar' ? 'التوفير المقدر' : 'Économies estimées'}
                        </div>
                        <div className="text-2xl font-bold mb-2">2,450 MAD<span className="text-sm font-normal opacity-80">/mois</span></div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-solar-400 h-2 rounded-full w-3/4"></div>
                        </div>
                      </div>
                      
                      {/* Quick actions */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white border border-neutral-100 rounded-xl p-3 shadow-sm">
                          <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mb-2">
                            <svg className="w-4 h-4 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="text-xs font-semibold text-neutral-900">
                            {locale === 'ar' ? 'حاسبة' : 'Calculateur'}
                          </div>
                        </div>
                        <div className="bg-white border border-neutral-100 rounded-xl p-3 shadow-sm">
                          <div className="w-8 h-8 bg-solar-100 rounded-lg flex items-center justify-center mb-2">
                            <svg className="w-4 h-4 text-solar-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                          </div>
                          <div className="text-xs font-semibold text-neutral-900">
                            {locale === 'ar' ? 'فنيين' : 'Techniciens'}
                          </div>
                        </div>
                      </div>
                      
                      {/* CTA button */}
                      <div className="bg-solar-500 rounded-xl py-3 text-center">
                        <span className="text-sm font-bold text-neutral-900">
                          {locale === 'ar' ? 'طلب دراسة' : 'Demander un devis'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-neutral-600 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
