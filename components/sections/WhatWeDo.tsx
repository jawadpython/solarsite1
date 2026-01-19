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
      color: 'primary',
    },
    {
      title: t.whatWeDo.feature2.title,
      description: t.whatWeDo.feature2.description,
      icon: '🔧',
      color: 'secondary',
    },
    {
      title: t.whatWeDo.feature3.title,
      description: t.whatWeDo.feature3.description,
      icon: '💡',
      color: 'accent',
    },
  ];

  const colorClasses = {
    primary: 'bg-primary-500 text-white',
    secondary: 'bg-secondary-500 text-white',
    accent: 'bg-accent-500 text-white',
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
            <span className="text-sm font-bold text-primary-600 uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-neutral-900 mb-6">
            {t.whatWeDo.title}
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            {t.whatWeDo.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-modern group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-20 h-20 ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-neutral-900 mb-4 group-hover:text-primary-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
