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
    <section className="section-padding bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3 leading-tight">
                {t.mobileApp.title.split('\n')[0]}
                <br />
                <span className="text-primary-700">{t.mobileApp.title.split('\n')[1]}</span>
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {t.mobileApp.description}
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/mobile-app`}
                className="bg-primary-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-800 transition-colors text-center"
              >
                {t.mobileApp.cta1}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="bg-white border border-neutral-200 text-primary-700 px-6 py-3 rounded-full font-semibold hover:bg-neutral-50 transition-colors text-center"
              >
                {t.mobileApp.cta2}
              </Link>
            </div>
          </div>

          {/* Phone Mockup Side */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px]">
              <div className="relative bg-neutral-900 rounded-[2rem] p-2 shadow-xl">
                <div className="bg-white rounded-[1.5rem] overflow-hidden">
                  <div className="bg-gradient-to-r from-primary-700 to-primary-600 h-8 flex items-center justify-between px-4 text-white text-xs font-semibold">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4 space-y-4">
                    <div>
                      <div className="h-5 bg-neutral-200 rounded w-28 mb-2"></div>
                      <div className="h-4 bg-neutral-100 rounded w-20"></div>
                    </div>
                    <div className="bg-primary-50 rounded-xl p-3 border border-primary-100">
                      <div className="h-4 bg-primary-200 rounded w-16 mb-2"></div>
                      <div className="space-y-1 mb-3">
                        <div className="h-3 bg-primary-200/60 rounded w-full"></div>
                        <div className="h-3 bg-primary-200/60 rounded w-3/4"></div>
                      </div>
                      <div className="h-8 bg-primary-600 rounded-lg"></div>
                    </div>
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
