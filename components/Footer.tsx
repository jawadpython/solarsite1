import Link from 'next/link';
import Container from './Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function Footer({ locale }: { locale: string }) {
  const currentYear = new Date().getFullYear();
  const t = getTranslations(locale as Locale);

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <Container>
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                TAWFIR <span className="text-primary-400">ENERGY</span>
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {t.footer.description}
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.services}</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`/${locale}/services`}
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {t.footer.solarInstallation}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/services`}
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {t.footer.energyConsulting}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/services`}
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {t.footer.maintenance}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.company}</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`/${locale}/about`}
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {t.footer.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/about`}
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {t.footer.ourTeam}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/partners`}
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {t.footer.careers}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.contact}</h4>
              <ul className="space-y-2 text-neutral-400">
                <li>{t.footer.country}</li>
                <li>
                  <a
                    href="mailto:info@tawfirenergy.com"
                    className="hover:text-primary-400 transition-colors"
                  >
                    info@tawfirenergy.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-neutral-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-neutral-500 text-sm">
                © {currentYear} Tawfir Energy. {t.footer.copyright}
              </p>
              <div className="flex space-x-6">
                <Link
                  href="#"
                  className="text-neutral-500 hover:text-primary-400 text-sm transition-colors"
                >
                  {t.footer.privacy}
                </Link>
                <Link
                  href="#"
                  className="text-neutral-500 hover:text-primary-400 text-sm transition-colors"
                >
                  {t.footer.terms}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
