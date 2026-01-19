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
    title: locale === 'ar' ? 'اتصل بنا' : 'Contact',
    description: locale === 'ar'
      ? 'اتصل بطوفير إنرجي للحصول على استشارة مجانية أو عرض سعر للطاقة الشمسية أو أي سؤال حول خدمات الطاقة الشمسية في المغرب.'
      : 'Contactez Tawfir Energy pour une consultation gratuite, un devis solaire ou toute question sur nos services d\'énergie solaire au Maroc.',
    alternates: {
      canonical: `/${locale}/contact`,
    },
  };
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  return (
    <div>
      <Container>
        <div className="section-padding">
          {/* Contact content will go here */}
        </div>
      </Container>
    </div>
  );
}
