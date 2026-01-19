import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from './lib/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip if already has locale
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Get locale from Accept-Language header or use default
    const acceptLanguage = request.headers.get('accept-language');
    let locale: typeof locales[number] = defaultLocale;
    
    if (acceptLanguage) {
      const preferredLocale = acceptLanguage.split(',')[0]?.split('-')[0];
      if (preferredLocale && locales.includes(preferredLocale as typeof locales[number])) {
        locale = preferredLocale as typeof locales[number];
      }
    }
    
    const newUrl = new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|icon.svg|apple-touch-icon.png|site.webmanifest|robots.txt|.*\\..*).*)',
  ],
};
