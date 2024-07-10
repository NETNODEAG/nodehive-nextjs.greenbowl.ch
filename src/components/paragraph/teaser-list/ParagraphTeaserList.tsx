import { createServerClient } from '@/nodehive/client';
import { Locale } from '@/nodehive/i18n-config';
import { DrupalParagraph } from '@/nodehive/types';

import NodeEventTeaser from '@/components/node/event/NodeEventTeaser';
import NodeJobTeaser from '@/components/node/job/NodeJobTeaser';

export interface ParagraphTeaserListProps {
  paragraph: DrupalParagraph;
  lang: Locale;
}

export default async function ParagraphTeaserList({
  paragraph,
  lang,
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

      if (contentNode) {
        content.push(contentNode);
      }
    }
  }

  return (
    <section data-paragraph-type="TeaserList" className="py-12 md:py-20">
      <div className="container-wrapper-sm">
        <ul className="grid gap-6">
          {content.map((node) => {
            const nodeData = node?.data;
            const id = nodeData?.id;
            const type = nodeData?.type;

            if (type === 'node--event') {
              return (
                <li key={id}>
                  <NodeEventTeaser node={node} lang={lang} />
                </li>
              );
            }

            if (type === 'node--job') {
              return (
                <li key={id}>
                  <NodeJobTeaser node={node} lang={lang} />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
}
