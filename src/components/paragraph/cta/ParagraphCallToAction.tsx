import Link from 'next/link';
import { createServerClient } from '@/nodehive/client';
import { DrupalParagraph } from '@/nodehive/types';

import { internalLinkUriToSlug } from '@/lib/utils';

export interface ParagraphCallToActionProps {
  paragraph: DrupalParagraph;
}

export default async function ParagraphCallToAction({
  paragraph,
}: ParagraphCallToActionProps) {
  const client = createServerClient();
  const fragmentId = paragraph?.field_cta_fragment?.id;

  const fragment = await client.getFragment(fragmentId, 'cta');
  const fragmentData = fragment?.data;
  const title = fragmentData?.field_cta_title;
  const cta = fragmentData?.field_cta_link;
  const ctaUrl = internalLinkUriToSlug(cta?.uri);
  const ctaLabel = cta?.title;

  return (
    <section data-paragraph-type="CallToAction" className="py-32 md:py-48">
      <div className="container-wrapper flex flex-col gap-10">
        <h2 className="h1 text-center text-secondary">{title}</h2>

        {ctaUrl && (
          <Link href={ctaUrl} className="btn-primary">
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
