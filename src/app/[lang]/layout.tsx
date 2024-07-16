import Connector from '@/nodehive/connector';
import { space } from '@/nodehive/space-config';

import '@/styles/globals.css';

import { Metadata } from 'next';
import { Inter, Unbounded } from 'next/font/google';
import { Locale } from '@/nodehive/i18n-config';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const unbounded = Unbounded({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-unbounded',
});

/**
 * The metadata
 * @type {Metadata}
 */
export const metadata: Metadata = {
  metadataBase: new URL(space.spaceMetadata.baseUrl),
  title: {
    template: space.spaceMetadata.title.template,
    default: space.spaceMetadata.title.default,
  },
  description: space.spaceMetadata.description,
  icons: space.spaceMetadata.icons,
  openGraph: space.spaceMetadata.openGraph,
};

interface LayoutProps {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = params;

  return (
    <html lang={lang} data-theme={space?.theme}>
      <body className={`${inter.variable} ${unbounded.variable}`}>
        {children}

        <Connector />
      </body>
    </html>
  );
}
