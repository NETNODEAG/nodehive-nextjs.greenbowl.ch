import LogoBarcelona from 'public/metadata/barcelona/logo.svg';
import LogoLucerne from 'public/metadata/lucerne/logo.svg';

export const spaceConfig = {
  '1': {
    siteName: 'Greenbowl Lucerne',
    shortName: 'Greenbowl',
    shortUrl: 'greenbowl-lucerne-ch.vercel.app',
    theme: 'lucerne',
    themeColor: '#ffffff',
    logo: LogoLucerne,
    url: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL,
    spaceMetadata: {
      baseUrl: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL,
      title: {
        template: '%s | Greenbowl',
        default: 'Greenbowl Lucerne',
      },
      description: 'Greenbowl Lucerne',
      ogImage: '/metadata/lucerne/og-image.jpg',
      icons: {
        icon: [
          { url: '/metadata/lucerne/icon1.png' },
          { url: '/metadata/lucerne/icon2.png' },
          { url: '/metadata/lucerne/icon3.png' },
          { url: '/metadata/lucerne/icon4.png' },
          { url: '/metadata/lucerne/icon5.png' },
        ],
        shortcut: ['/metadata/lucerne/favicon.ico'],
        apple: [{ url: '/metadata/lucerne/apple-icon.png' }],
        other: [],
      },
      openGraph: {
        siteName: 'Greenbowl Lucerne',
        title: 'Greenbowl Lucerne',
        description: 'Greenbowl Lucerne',
        type: 'website',
        images: [
          {
            url: '/metadata/lucerne/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Greenbowl Lucerne',
          },
        ],
      },
    },
  },
  '2': {
    siteName: 'Greenbowl Barcelona',
    shortName: 'Greenbowl',
    shortUrl: 'greenbowl-barcelona-ch.vercel.app',
    theme: 'barcelona',
    themeColor: '#ffffff',
    logo: LogoBarcelona,
    url: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL,
    spaceMetadata: {
      baseUrl: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL,
      title: {
        template: '%s | Greenbowl',
        default: 'Greenbowl Barcelona',
      },
      description: 'Greenbowl Barcelona',
      ogImage: '/metadata/barcelona/og-image.jpg',
      icons: {
        icon: [
          { url: '/metadata/barcelona/icon1.png' },
          { url: '/metadata/barcelona/icon2.png' },
          { url: '/metadata/barcelona/icon3.png' },
          { url: '/metadata/barcelona/icon4.png' },
          { url: '/metadata/barcelona/icon5.png' },
        ],
        shortcut: ['/metadata/barcelona/favicon.ico'],
        apple: [{ url: '/metadata/barcelona/apple-icon.png' }],
        other: [],
      },
      openGraph: {
        siteName: 'Greenbowl Barcelona',
        title: 'Greenbowl Barcelona',
        description: 'Greenbowl Barcelona',
        type: 'website',
        images: [
          {
            url: '/metadata/barcelona/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Greenbowl Barcelona',
          },
        ],
      },
    },
  },
};

/**
 * The space
 * @type {Space}
 */
export const space =
  spaceConfig?.[process.env.NEXT_PUBLIC_DRUPAL_NODEHIVE_SPACE_ID] ||
  spaceConfig?.['1'];
