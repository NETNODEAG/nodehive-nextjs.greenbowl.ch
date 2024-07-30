import Link from 'next/link';
import { createServerClient } from '@/nodehive/client';
import { AuthWrapper } from '@/nodehive/components/auth/AuthWrapper';
import FragmentEditButton from '@/nodehive/components/visual-editor/fragment/fragment-edit-button';
import { DrupalFragment } from '@/nodehive/types';
import Debug from '@/ui/netnode/debug';

import AnimatedWrapper from '../animations/AnimtedWrapper';
import Fragment from '../fragment/Fragment';
import Newsletter from './Newsletter';

export default async function Footer() {
  const client = createServerClient();

  const fragment = await client.getFragment(
    'e968c32e-8cde-48fb-9bcd-effc4cb8ed69',
    'text'
  );
  console.log('fragment', fragment);
  const menu = await client.getMenuItems('footer-lucerne');

  return (
    <AnimatedWrapper>
      <footer className="relative overflow-hidden bg-secondary pb-20 text-white md:pb-40">
        <div className="container-wrapper grid grid-cols-2 justify-between gap-12 pt-12 md:grid-cols-12">
          <div className="col-span-2 md:col-span-6">
            <Newsletter />
          </div>

          <div className="md:col-span-3 md:col-start-7 md:justify-self-end">
            {menu?.data?.map((item: any) => (
              <div key={item.id}>
                <Link href={item.url}>{item.title}</Link>
              </div>
            ))}
          </div>

          <div className="justify-self-end md:col-span-3">
            <Fragment fragment={fragment as unknown as DrupalFragment} />
            {fragment?.data?.field_text_content && (
              <div
                dangerouslySetInnerHTML={{
                  __html: fragment.data.field_text_content?.processed,
                }}
              />
            )}
          </div>
        </div>

        <div className="absolute -bottom-[30px] left-0 right-0 transform text-center font-unbounded text-5xl font-bold leading-normal xl:-bottom-[110px] xl:text-[11rem]">
          Green Bowl
        </div>
      </footer>
    </AnimatedWrapper>
  );
}
