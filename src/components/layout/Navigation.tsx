import Link from 'next/link';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';

export default function Navigation({ menu }) {
  return (
    <nav className="hidden md:block">
      <Menubar className="bg-transparent">
        {menu?.map((item: any) => (
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
