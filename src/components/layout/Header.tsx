import Link from 'next/link';

import { Logo } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Navigation from '@/components/layout/Navigation';

export default async function Header({ lang, variant }) {
  return (
    <header
      className={cn(
        variant === 'header-hero' && 'absolute left-0 right-0 top-0 text-white',
        variant === 'header-stacking' &&
          'absolute left-0 right-0 top-0 text-white',
        variant === 'header-basic' && 'text-black',
        'z-20 bg-transparent py-6'
      )}
    >
      <div className="container-wrapper">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className={cn('font-bold')}>
            <Logo />
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
