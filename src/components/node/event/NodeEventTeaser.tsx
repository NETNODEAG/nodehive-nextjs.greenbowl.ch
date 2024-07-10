import Link from 'next/link';
import { Locale } from '@/nodehive/i18n-config';
import { DrupalNode } from '@/nodehive/types';
import { format } from 'date-fns';

export interface NodeEventTeaserProps {
  node: DrupalNode;
  lang: Locale;
}

export default function NodeEventTeaser({ node, lang }: NodeEventTeaserProps) {
  const nodeData = node?.data;

  const internalId = nodeData?.drupal_internal__nid;
  const title = nodeData?.title;
  const location = nodeData?.field_event_location;
  const date = nodeData?.field_event_date;
  const alias = nodeData?.path?.alias;
  const link = alias ? `/${lang}${alias}` : `/${lang}/node/${internalId}`;

  return (
    <article
      data-node-type="Event"
      className="border-3 rounded-md border-primary p-6"
    >
      <Link href={link} className="block">
        <p className="byline mb-3">{format(date, 'd MMMM yyyy, HH:SS')}</p>
        <h2>{title}</h2>
        <p className="mt-6 font-unbounded text-lg font-semibold uppercase tracking-wider text-primary">
          {location}
        </p>
      </Link>
    </article>
  );
}
