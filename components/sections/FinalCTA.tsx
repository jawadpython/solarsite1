import Link from 'next/link';
import Container from '../Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function FinalCTA({ locale }: { locale: string }) {
  const t = getTranslations(locale as Locale);
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500">
      <Container>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.finalCta.title}
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            {t.finalCta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/contact`}
              className="bg-white text-primary-700 px-10 py-4 rounded-[16px] font-semibold hover:bg-neutral-50 hover:shadow-xl transition-all duration-300 inline-block"
            >
              {t.finalCta.cta1}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="bg-white/10 border-2 border-white/30 text-white px-10 py-4 rounded-[16px] font-semibold hover:bg-white/20 transition-all duration-300 inline-block"
            >
              {t.finalCta.cta2}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
