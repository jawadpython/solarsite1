import Link from 'next/link';
import Container from '../Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function MobileApp({ locale }: { locale: string }) {
  const t = getTranslations(locale as Locale);
  
  const features = [
    {
      title: t.mobileApp.feature1.title,
      description: t.mobileApp.feature1.description,
    },
    {
      title: t.mobileApp.feature2.title,
      description: t.mobileApp.feature2.description,
    },
    {
      title: t.mobileApp.feature3.title,
      description: t.mobileApp.feature3.description,
    },
    {
      title: t.mobileApp.feature4.title,
      description: t.mobileApp.feature4.description,
    },
    {
      title: t.mobileApp.feature5.title,
      description: t.mobileApp.feature5.description,
    },
  ];
  
  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 to-white relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="animate-slide-up">
            <div className="inline-block px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full mb-6">
              <span className="text-sm font-bold text-accent-600 uppercase tracking-wider">
                {t.mobileApp.badge}
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-neutral-900 mb-6 leading-tight">
              {t.mobileApp.title.split('\n')[0]}
              <br />
              <span className="text-primary-500">{t.mobileApp.title.split('\n')[1]}</span>
            </h2>
            <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
              {t.mobileApp.description}
            </p>
            
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-black text-neutral-900 mb-2 text-lg group-hover:text-primary-500 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/mobile-app`}
                className="btn-primary"
              >
                {t.mobileApp.cta1}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="btn-secondary"
              >
                {t.mobileApp.cta2}
              </Link>
            </div>
          </div>

          {/* Phone Mockup Side */}
          <div className="flex items-center justify-center lg:justify-end animate-scale-in delay-300">
            <div className="relative w-full max-w-[320px]">
              {/* Phone Frame */}
              <div className="relative bg-neutral-900 rounded-[3rem] p-3 shadow-2xl ring-4 ring-primary-500/20">
                {/* Screen */}
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-10 flex items-center justify-between px-5 text-white text-xs font-bold">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-6 space-y-6 bg-gradient-to-b from-white to-neutral-50">
                    {/* Header */}
                    <div>
                      <div className="h-7 bg-gradient-to-r from-primary-500/20 to-primary-500/10 rounded-xl w-36 mb-3"></div>
                      <div className="h-5 bg-neutral-200 rounded-lg w-28"></div>
                    </div>
                    
                    {/* Calculator Card */}
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-5 border-2 border-primary-200">
                      <div className="h-5 bg-primary-300 rounded-lg w-24 mb-4"></div>
                      <div className="space-y-2 mb-4">
                        <div className="h-4 bg-primary-200/60 rounded-lg w-full"></div>
                        <div className="h-4 bg-primary-200/60 rounded-lg w-3/4"></div>
                      </div>
                      <div className="h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-lg"></div>
                    </div>
                    
                    {/* Feature List */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-50 rounded-xl shadow-sm"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-neutral-200 rounded-lg w-28"></div>
                          <div className="h-3 bg-neutral-100 rounded-lg w-36"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-50 rounded-xl shadow-sm"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-neutral-200 rounded-lg w-32"></div>
                          <div className="h-3 bg-neutral-100 rounded-lg w-40"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -right-8 -bottom-8 w-full h-full bg-gradient-to-br from-primary-200/40 to-secondary-200/30 rounded-[3rem] blur-3xl"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
