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
    title: locale === 'ar' ? 'الشركاء والفنيون' : 'Partenaires & Techniciens',
    description: locale === 'ar'
      ? 'انضم إلى شبكة طوفير إنرجي كشريك أو فني. تواصل مع شبكة محترفي الطاقة الشمسية في المغرب.'
      : 'Rejoignez le réseau Tawfir Energy en tant que partenaire ou technicien. Connectez-vous avec notre réseau de professionnels de l\'énergie solaire au Maroc.',
    alternates: {
      canonical: `/${locale}/partners`,
    },
  };
}

export default function PartnersPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  return (
    <div>
      <Container>
        <div className="section-padding">
          {/* Partners/Technicians content will go here */}
        </div>
      </Container>
    </div>
  );
}
