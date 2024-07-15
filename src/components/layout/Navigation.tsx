import Link from 'next/link';
import { createServerClient } from '@/nodehive/client';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '../ui/menubar';

interface NavigationProps {
  menuId: string;
}

export default async function Navigation({ menuId }: NavigationProps) {
  const client = createServerClient();

  const navigation = await client.getMenuItems(menuId);

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
    <nav className="hidden md:block">
      <Menubar className="bg-transparent">
        {mainNavigation?.map((item: any) => (
          <MenubarMenu key={item?.id}>
            {item.subMenu.length > 0 ? (
              <MenubarTrigger>{item?.title}</MenubarTrigger>
            ) : (
              <Link href={item.url}>{item?.title}</Link>
            )}

            {item.subMenu.length > 0 && (
              <MenubarContent>
                {item.subMenu.map((subItem: any) => (
                  <MenubarItem key={subItem.id}>
                    <Link href={subItem.url}>{subItem.title}</Link>
                  </MenubarItem>
                ))}
              </MenubarContent>
            )}
          </MenubarMenu>
        ))}
      </Menubar>
      {/* 
      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          {mainNavigation?.map((item: any) => (
            <NavigationMenuItem key={item?.id}>
              {item.subMenu.length > 0 ? (
                <>
                  <NavigationMenuTrigger className="relative bg-transparent p-0 text-lg font-normal">
                    {item?.title}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="grid w-full gap-2 p-2 text-base">
                      {item.subMenu.map((subItem: any) => (
                        <NavigationMenuLink
                          key={subItem.id}
                          className="text-normal"
                        >
                          <Link href={subItem.url}>{subItem.title}</Link>
                        </NavigationMenuLink>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={item.url}>{item?.title}</Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu> */}
    </nav>
  );
}
