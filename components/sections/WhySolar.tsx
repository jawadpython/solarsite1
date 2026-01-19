import Container from '../Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function WhySolar({ locale }: { locale: string }) {
  const t = getTranslations(locale as Locale);
  
  const benefits = [
    {
      title: t.whySolar.benefit1.title,
      description: t.whySolar.benefit1.description,
      number: '01',
    },
    {
      title: t.whySolar.benefit2.title,
      description: t.whySolar.benefit2.description,
      number: '02',
    },
    {
      title: t.whySolar.benefit3.title,
      description: t.whySolar.benefit3.description,
      number: '03',
    },
    {
      title: t.whySolar.benefit4.title,
      description: t.whySolar.benefit4.description,
      number: '04',
    },
  ];
  
  return (
    <section className="section-padding bg-white relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-up">
            <div className="inline-block px-4 py-2 bg-success-500/10 border border-success-500/20 rounded-full mb-6">
              <span className="text-sm font-bold text-success-600 uppercase tracking-wider">Benefits</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-neutral-900 mb-6 leading-tight">
              {t.whySolar.title}
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
              {t.whySolar.subtitle}
            </p>
          </div>
          
          <div className="lg:block hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl p-12 text-white">
                <div className="text-6xl font-black mb-4">100%</div>
                <div className="text-2xl font-bold mb-2">Clean Energy</div>
                <div className="text-white/80">Sustainable future starts here</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="card-modern group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-3xl font-black text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {benefit.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-neutral-900 mb-3 group-hover:text-primary-500 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-lg">
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
