import Link from 'next/link';
import { DialogTrigger } from '@radix-ui/react-dialog';

import { HamburguerIcon, Logo } from '@/lib/icons';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export default function FlyoutNavigation({ menu }) {
  return (
    <Dialog>
      <DialogTrigger className="block md:hidden">
        <HamburguerIcon />
      </DialogTrigger>

      <DialogContent>
        <div className="space-y-20">
          <Logo />

          <ul className="flex flex-col gap-10">
            {menu?.map((item: any) => (
              <li key={item.id}>
                {item.subMenu.length > 0 ? (
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="font-sans text-2xl font-semibold uppercase tracking-wider">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-2">
                        {item.subMenu.map((subItem: any) => (
                          <Link
                            key={subItem.id}
                            href={subItem.url}
                            className="text-2xl font-semibold uppercase tracking-wider"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link
                    href={item.url}
                    className="text-2xl font-semibold uppercase tracking-wider"
                  >
                    {item?.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Link href="/node/11" className="btn-primary">
            Book a table
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
