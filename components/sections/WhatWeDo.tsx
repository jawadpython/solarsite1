import Container from '../Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function WhatWeDo({ locale }: { locale: string }) {
  const t = getTranslations(locale as Locale);
  
  const features = [
    {
      title: t.whatWeDo.feature1.title,
      description: t.whatWeDo.feature1.description,
      icon: '⚡',
      iconBg: 'bg-primary-100',
      iconColor: 'text-primary-600',
    },
    {
      title: t.whatWeDo.feature2.title,
      description: t.whatWeDo.feature2.description,
      icon: '🔧',
      iconBg: 'bg-secondary-100',
      iconColor: 'text-secondary-600',
    },
    {
      title: t.whatWeDo.feature3.title,
      description: t.whatWeDo.feature3.description,
      icon: '💡',
      iconBg: 'bg-accent-100',
      iconColor: 'text-accent-600',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
      <Container>
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {t.whatWeDo.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            {t.whatWeDo.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="service-card"
            >
              <div className={`w-16 h-16 ${feature.iconBg} ${feature.iconColor} rounded-[16px] flex items-center justify-center text-3xl mb-5`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
