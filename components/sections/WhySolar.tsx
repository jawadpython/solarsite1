import Container from '../Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function WhySolar({ locale }: { locale: string }) {
  const t = getTranslations(locale as Locale);
  
  const benefits = [
    {
      title: t.whySolar.benefit1.title,
      description: t.whySolar.benefit1.description,
    },
    {
      title: t.whySolar.benefit2.title,
      description: t.whySolar.benefit2.description,
    },
    {
      title: t.whySolar.benefit3.title,
      description: t.whySolar.benefit3.description,
    },
    {
      title: t.whySolar.benefit4.title,
      description: t.whySolar.benefit4.description,
    },
  ];
  
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {t.whySolar.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            {t.whySolar.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="service-card"
            >
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary-100 rounded-[16px] flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary-600 rounded-[12px]"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
