import Link from 'next/link';
import Container from '../Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function ServicesOverview({ locale }: { locale: string }) {
  const t = getTranslations(locale as Locale);
  
  const services = [
    {
      title: t.services.service1.title,
      description: t.services.service1.description,
      gradient: 'from-primary-500 to-primary-600',
    },
    {
      title: t.services.service2.title,
      description: t.services.service2.description,
      gradient: 'from-secondary-500 to-secondary-600',
    },
    {
      title: t.services.service3.title,
      description: t.services.service3.description,
      gradient: 'from-accent-500 to-accent-600',
    },
    {
      title: t.services.service4.title,
      description: t.services.service4.description,
      gradient: 'from-success-500 to-success-600',
    },
  ];
  
  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 to-white relative">
      <Container>
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-neutral-900 mb-6">
            {t.services.title}
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white border-2 border-neutral-200 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mb-6 group-hover:w-24 transition-all duration-500"></div>
                <h3 className="text-2xl font-black text-neutral-900 mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-neutral-600 group-hover:text-white/90 transition-colors duration-300 flex-grow leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 text-lg font-bold text-primary-500 hover:text-primary-600 group"
          >
            <span>{locale === 'ar' ? 'عرض جميع الخدمات' : 'View All Services'}</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
