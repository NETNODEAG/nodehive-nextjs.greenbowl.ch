import { DrupalNode, DrupalParagraph } from '@/nodehive/types';

import Paragraph from '@/components/paragraph/Paragraph';

export interface NodePageProps {
  node: DrupalNode;
}

export default function NodePage({ node }: NodePageProps) {
  const nodeData = node?.data;
  const paragraphs = nodeData?.field_paragraphs;

  return (
    <article data-node-type="Page">
      {Array.isArray(paragraphs) && (
        <div className="mb-20 space-y-20">
          {paragraphs?.map((paragraph: DrupalParagraph) => {
            return <Paragraph key={paragraph.id} paragraph={paragraph} />;
          })}
        </div>
      )}
    </article>
  );
}
