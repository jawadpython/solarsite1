import { Metadata } from 'next';
import { notFound } from 'next/navigation';
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

  return (
    <div>
      <Container>
        <div className="section-padding">
          {/* About content will go here */}
        </div>
      </Container>
    </div>
  );
}
