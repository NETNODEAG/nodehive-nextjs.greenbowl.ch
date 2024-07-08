import Image from 'next/image';
import Link from 'next/link';

import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import Navigation from '@/components/layout/Navigation';

export default async function Header({ lang }) {
  return (
    <header className="absolute left-0 right-0 top-0 z-20 bg-transparent py-6 text-white">
      <div className="container-wrapper">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="font-bold">
            <Image
              src="/metadata/lucerne/logo.svg"
              alt="Logo"
              width={150}
              height={50}
            />
          </Link>

          {/* INFO: Add the id of the menu that you want to fetch */}
          {/* You can uncomment the line below or remove it. It's just an example */}
          <Navigation menuId="main-lucerne" />

          <Link href="/" className="btn-primary">
            Book a table
          </Link>
        </div>
      </div>
    </header>
  );
}
