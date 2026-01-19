import Container from '../Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function Trust({ locale }: { locale: string }) {
  const t = getTranslations(locale as Locale);
  
  const trustPoints = [
    {
      value: t.trust.stat1,
      label: t.trust.stat1Label,
      color: 'text-primary-600',
    },
    {
      value: t.trust.stat2,
      label: t.trust.stat2Label,
      color: 'text-secondary-600',
    },
    {
      value: t.trust.stat3,
      label: t.trust.stat3Label,
      color: 'text-accent-600',
    },
    {
      value: t.trust.stat4,
      label: t.trust.stat4Label,
      color: 'text-success-600',
    },
  ];
  
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {t.trust.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {t.trust.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <div 
              key={index} 
              className="service-card text-center"
            >
              <div className={`text-5xl md:text-6xl font-bold mb-3 ${point.color}`}>
                {point.value}
              </div>
              <div className="text-neutral-600 font-semibold">
                {point.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
