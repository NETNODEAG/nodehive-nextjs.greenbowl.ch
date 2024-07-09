import Image from 'next/image';
import Link from 'next/link';
import { createServerClient } from '@/nodehive/client';
import { DrupalParagraph } from '@/nodehive/types';

export interface ParagraphTeaserListProps {
  paragraph: DrupalParagraph;
}

export default async function ParagraphTeaserList({
  paragraph,
}: ParagraphTeaserListProps) {
  const client = createServerClient();

  const contentRef = paragraph?.field_teaser_list_ref_content;
  let content = [];

  if (contentRef && contentRef.length > 0) {
    for (const node of contentRef) {
      let contentNode;

      if (!node?.id) {
        return null;
      }

      if (node?.type === 'node--job') {
        contentNode = await client.getNode(node?.id, 'job');
      }

      if (node?.type === 'node--event') {
        contentNode = await client.getNode(node?.id, 'event');
      }

      if (node?.type === 'node--page') {
        contentNode = await client.getNode(node?.id, 'page');
      }

      if (contentNode) {
        content.push(contentNode);
      }
    }
  }

  return (
    <section data-paragraph-type="TeaserList" className="paragraph py-48">
      <div className="container-wrapper">
        <ul className="grid gap-6">
          {content.map((node) => {
            const nodeData = node?.data;
            const internalId = nodeData?.drupal_internal__nid;
            const title = nodeData?.title;

            return (
              <li key={node.id} className="border-2 border-primary">
                <Link href={`/node/${internalId}`} className="flex p-6">
                  <h2>{title}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
