import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales } from '@/lib/i18n';
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
    title: locale === 'ar' ? 'التطبيق المحمول' : 'Application Mobile',
    description: locale === 'ar'
      ? 'تطبيق طوفير إنرجي: حاسبة الطاقة الشمسية، حاسبة الضخ، تقدير التوفير، البحث عن الفنيين وطلب عرض السعر.'
      : 'Application Tawfir Energy : calculateur solaire, calculateur de pompage, estimation des économies, recherche de techniciens et demande de devis.',
    alternates: {
      canonical: `/${locale}/mobile-app`,
    },
  };
}

export default function MobileAppPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  return (
    <div>
      <Container>
        <div className="section-padding">
          {/* Mobile App content will go here */}
        </div>
      </Container>
    </div>
  );
}
