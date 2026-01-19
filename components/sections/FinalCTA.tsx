import Link from 'next/link';
import Container from '../Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function FinalCTA({ locale }: { locale: string }) {
  const t = getTranslations(locale as Locale);
  return (
    <section className="section-padding bg-neutral-900 relative overflow-hidden">
      {/* Geometric shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="inline-block px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full mb-8">
            <span className="text-sm font-bold text-primary-400 uppercase tracking-wider">Get Started</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            {t.finalCta.title}
          </h2>
          <p className="text-xl md:text-2xl text-neutral-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            {t.finalCta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href={`/${locale}/contact`}
              className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100 hover:shadow-2xl hover:shadow-white/20"
            >
              {t.finalCta.cta1}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white/10"
            >
              {t.finalCta.cta2}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
