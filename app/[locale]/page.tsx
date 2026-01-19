import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { locales } from '@/lib/i18n';
import Hero from '@/components/sections/Hero';
import WhatWeDo from '@/components/sections/WhatWeDo';
import WhySolar from '@/components/sections/WhySolar';

// Lazy load below-the-fold components
const MobileApp = dynamic(() => import('@/components/sections/MobileApp'), {
  loading: () => <div className="section-padding bg-background-light" />,
});
const ServicesOverview = dynamic(() => import('@/components/sections/ServicesOverview'), {
  loading: () => <div className="section-padding bg-background-light" />,
});
const Trust = dynamic(() => import('@/components/sections/Trust'), {
  loading: () => <div className="section-padding" />,
});
const FinalCTA = dynamic(() => import('@/components/sections/FinalCTA'), {
  loading: () => <div className="section-padding bg-primary-600" />,
});

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
    title: 'Accueil',
    description: locale === 'ar' 
      ? 'قلل فاتورة الكهرباء بالطاقة الشمسية. حلول الطاقة الشمسية الاحترافية في المغرب. التركيب والصيانة والاستشارة.'
      : 'Réduisez votre facture d\'électricité grâce au solaire. Solutions d\'énergie solaire professionnelles au Maroc. Installation, maintenance et consultation.',
    alternates: {
      canonical: `/${locale}`,
    },
  };
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  return (
    <div>
      <Hero locale={locale} />
      <WhatWeDo locale={locale} />
      <WhySolar locale={locale} />
      <MobileApp locale={locale} />
      <ServicesOverview locale={locale} />
      <Trust locale={locale} />
      <FinalCTA locale={locale} />
    </div>
  );
}
