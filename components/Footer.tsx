import Link from 'next/link';
import Container from './Container';
import { getTranslations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export default function Footer({ locale }: { locale: string }) {
  const currentYear = new Date().getFullYear();
  const t = getTranslations(locale as Locale);

  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t-4 border-primary-500">
      <Container>
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-3xl font-black text-white mb-6">
                Tawfir<span className="text-primary-500">Energy</span>
              </h3>
              <p className="text-neutral-400 leading-relaxed text-lg">
                {t.footer.description}
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-black mb-6 text-xl">{t.footer.services}</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={`/${locale}/services`}
                    className="text-neutral-400 hover:text-primary-400 transition-colors font-medium"
                  >
                    {t.footer.solarInstallation}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/services`}
                    className="text-neutral-400 hover:text-primary-400 transition-colors font-medium"
                  >
                    {t.footer.energyConsulting}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/services`}
                    className="text-neutral-400 hover:text-primary-400 transition-colors font-medium"
                  >
                    {t.footer.maintenance}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-black mb-6 text-xl">{t.footer.company}</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={`/${locale}/about`}
                    className="text-neutral-400 hover:text-primary-400 transition-colors font-medium"
                  >
                    {t.footer.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/about`}
                    className="text-neutral-400 hover:text-primary-400 transition-colors font-medium"
                  >
                    {t.footer.ourTeam}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/partners`}
                    className="text-neutral-400 hover:text-primary-400 transition-colors font-medium"
                  >
                    {t.footer.careers}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-black mb-6 text-xl">{t.footer.contact}</h4>
              <ul className="space-y-3 text-neutral-400">
                <li className="font-medium">{t.footer.country}</li>
                <li>
                  <a
                    href="mailto:info@tawfirenergy.com"
                    className="hover:text-primary-400 transition-colors font-medium"
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
              <p className="text-neutral-500 text-sm font-medium">
                © {currentYear} Tawfir Energy. {t.footer.copyright}
              </p>
              <div className="flex space-x-6">
                <Link
                  href="#"
                  className="text-neutral-500 hover:text-primary-400 text-sm transition-colors font-medium"
                >
                  {t.footer.privacy}
                </Link>
                <Link
                  href="#"
                  className="text-neutral-500 hover:text-primary-400 text-sm transition-colors font-medium"
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
