import Link from 'next/link';
import { createServerClient } from '@/nodehive/client';

import { Logo } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Navigation from '@/components/layout/Navigation';
import FlyoutNavigation from './Flyoutnavigation';

export default async function Header({ lang, variant = 'header-hero' }) {
  const client = createServerClient();

  const navigation = await client.getMenuItems('main-lucerne');

  if (!navigation?.data?.length) {
    return null;
  }

  const mainNavigation = Object.values(
    navigation?.data?.reduce((acc, item) => {
      if (!item.parent) {
        // This is a parent menu item
        acc[item.id] = { ...item, subMenu: [] };
      } else if (acc[item.parent]) {
        // This is a submenu item for an existing parent
        acc[item.parent].subMenu.push(item);
      }
      return acc;
    }, {})
  );

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
          <Navigation menu={mainNavigation} />

          <Link href="/node/11" className="btn-primary hidden md:block">
            Book a table
          </Link>

          <FlyoutNavigation menu={mainNavigation} />
        </div>
      </div>
    </header>
  );
}
