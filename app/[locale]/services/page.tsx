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
    title: locale === 'ar' ? 'الخدمات' : 'Services',
    description: locale === 'ar'
      ? 'خدمات شاملة في الطاقة الشمسية: الدراسة وعرض السعر، التركيب، الصيانة، الضخ الشمسي وشبكة الفنيين المعتمدين في المغرب.'
      : 'Services complets en énergie solaire : étude et devis, installation, maintenance, pompage solaire et réseau de techniciens certifiés au Maroc.',
    alternates: {
      canonical: `/${locale}/services`,
    },
  };
}

export default function ServicesPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  const t = getTranslations(locale as typeof locales[number]);

  const services = [
    {
      title: t.services.service1.title,
      description: t.services.service1.description,
    },
    {
      title: t.services.service2.title,
      description: t.services.service2.description,
    },
    {
      title: t.services.service3.title,
      description: t.services.service3.description,
    },
    {
      title: t.services.service4.title,
      description: t.services.service4.description,
    },
    {
      title: t.services.service5.title,
      description: t.services.service5.description,
    },
  ];

  return (
    <div>
      <Container>
        <div className="section-padding">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.services.title}
            </h1>
            <p className="text-lg text-foreground-muted">
              {t.services.subtitle}
            </p>
          </div>

          {/* Services Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-neutral-200 rounded-lg p-8 hover:border-primary-300 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-primary-600 rounded"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h2>
                      <p className="text-foreground-muted leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <p className="text-foreground-muted mb-6">
              {t.services.contactCta}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              {t.services.contactButton}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
