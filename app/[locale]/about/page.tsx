import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { locales } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';
import Container from '@/components/Container';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const t = await import(`@/messages/${locale}.json`).then((m) => m.default).catch(() => null);
  
  if (!t) {
    return {};
  }

  return {
    title: locale === 'ar' ? 'من نحن' : 'À propos',
    description: locale === 'ar'
      ? 'اكتشف طوفير إنرجي، شريكك في الطاقة الشمسية في المغرب. مهمتنا وفريقنا والتزامنا بالطاقة المتجددة.'
      : 'Découvrez Tawfir Energy, votre partenaire en énergie solaire au Maroc. Notre mission, notre équipe et notre engagement pour l\'énergie renouvelable.',
    alternates: {
      canonical: `/${locale}/about`,
    },
  };
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  const t = getTranslations(locale as typeof locales[number]);
  
  const valueIcons = [
    <svg key="1" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>,
    <svg key="2" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>,
    <svg key="3" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>,
    <svg key="4" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>,
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 py-20 lg:py-28 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-solar-500/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" aria-hidden="true" />
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 border border-white/20">
              <svg className="w-5 h-5 text-solar-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm font-semibold text-white/90">TAWFIR ENERGY</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.about.title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
              {t.about.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 lg:p-10 border border-primary-100">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-700 mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                  {t.about.mission.title}
                </h2>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  {t.about.mission.description}
                </p>
              </div>
              
              {/* Vision */}
              <div className="bg-gradient-to-br from-solar-50 to-white rounded-2xl p-8 lg:p-10 border border-solar-100">
                <div className="w-14 h-14 bg-solar-100 rounded-xl flex items-center justify-center text-solar-700 mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                  {t.about.vision.title}
                </h2>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  {t.about.vision.description}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-12 lg:mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"></div>
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">
                  {locale === 'ar' ? 'قيمنا' : 'Nos valeurs'}
                </span>
                <div className="w-12 h-1 bg-gradient-to-l from-primary-600 to-primary-400 rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                {t.about.values.title}
              </h2>
            </div>
            
            {/* Values grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                t.about.values.value1,
                t.about.values.value2,
                t.about.values.value3,
                t.about.values.value4,
              ].map((value, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-neutral-100 hover:border-primary-200 shadow-soft hover:shadow-medium transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center text-primary-700 mx-auto mb-5 group-hover:scale-110 transition-transform">
                    {valueIcons[index]}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-neutral-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-solar-500/10 rounded-full blur-3xl" aria-hidden="true" />
        
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t.about.stats.title}
              </h2>
            </div>
            
            {/* Stats grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: t.about.stats.stat1, label: t.about.stats.stat1Label },
                { value: t.about.stats.stat2, label: t.about.stats.stat2Label },
                { value: t.about.stats.stat3, label: t.about.stats.stat3Label },
                { value: t.about.stats.stat4, label: t.about.stats.stat4Label },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold text-solar-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-neutral-400 font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {locale === 'ar' ? 'هل أنت مستعد للبدء؟' : 'Prêt à démarrer votre projet ?'}
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              {locale === 'ar' 
                ? 'تواصل معنا للحصول على دراسة مجانية ومخصصة لمشروعك الشمسي.'
                : 'Contactez-nous pour obtenir une étude gratuite et personnalisée pour votre installation solaire.'}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              {locale === 'ar' ? 'تواصل معنا' : 'Contactez-nous'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
