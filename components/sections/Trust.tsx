import Container from '../Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function Trust({ locale }: { locale: string }) {
  const t = getTranslations(locale as Locale);
  
  const trustPoints = [
    {
      value: t.trust.stat1,
      label: t.trust.stat1Label,
      color: 'primary',
    },
    {
      value: t.trust.stat2,
      label: t.trust.stat2Label,
      color: 'secondary',
    },
    {
      value: t.trust.stat3,
      label: t.trust.stat3Label,
      color: 'accent',
    },
    {
      value: t.trust.stat4,
      label: t.trust.stat4Label,
      color: 'success',
    },
  ];

  const colorClasses = {
    primary: 'text-primary-500',
    secondary: 'text-secondary-500',
    accent: 'text-accent-500',
    success: 'text-success-500',
  };
  
  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 to-secondary-500 relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            {t.trust.title}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {t.trust.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <div 
              key={index} 
              className="card-modern bg-white/95 backdrop-blur-sm text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-6xl md:text-7xl font-black mb-4 ${colorClasses[point.color as keyof typeof colorClasses]}`}>
                {point.value}
              </div>
              <div className="text-neutral-600 font-bold text-lg">
                {point.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
