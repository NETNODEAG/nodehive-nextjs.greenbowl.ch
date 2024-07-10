import Link from 'next/link';
import { Locale } from '@/nodehive/i18n-config';
import { DrupalNode } from '@/nodehive/types';

export interface NodeJobTeaserProps {
  node: DrupalNode;
  lang: Locale;
}

export default function NodeJobTeaser({ node, lang }: NodeJobTeaserProps) {
  const nodeData = node?.data;

  const internalId = nodeData?.drupal_internal__nid;
  const title = nodeData?.title;
  const location = nodeData?.field_job_location;
  const workload = nodeData?.field_job_workload;
  const alias = nodeData?.path?.alias;
  const link = alias ? `/${lang}${alias}` : `/${lang}/node/${internalId}`;

  return (
    <article
      data-node-type="Job"
      className="border-3 rounded-md border-primary p-6"
    >
      <Link href={link} className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        <h2 className="md:col-span-2">{title}</h2>

        <ul className="md:text-right">
          <li>
            <p className="font-unbounded text-lg font-semibold uppercase">
              {workload}
            </p>
          </li>
          <li>
            <p className="font-unbounded text-lg font-semibold uppercase tracking-wider text-primary">
              {location}
            </p>
          </li>
        </ul>
      </Link>
    </article>
  );
}
