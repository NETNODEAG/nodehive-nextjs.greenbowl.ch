import { DrupalNode, DrupalParagraph } from '@/nodehive/types';

import { FormattedText } from '@/components/layout/FormattedText';
import Paragraph from '@/components/paragraph/Paragraph';
import NodeHeader from './NodeHeader';

export interface NodePageProps {
  node: DrupalNode;
}

export default function NodePage({ node }: NodePageProps) {
  const nodeData = node?.data;
  const headerVariant = nodeData?.field_header_variant;
  const headerText = nodeData?.field_header_text;
  const headerImage = nodeData?.field_header_image;
  const paragraphs = nodeData?.field_paragraphs;

  return (
    <article data-node-type="Page">
      {headerImage?.id ? (
        <NodeHeader
          title={headerText}
          media={headerImage}
          variant={headerVariant}
        />
      ) : (
        <>
          {headerText && (
            <FormattedText
              html={headerText?.processed}
              className="py-20 text-center"
            />
          )}
        </>
      )}

      {Array.isArray(paragraphs) && (
        <>
          {paragraphs?.map((paragraph: DrupalParagraph) => {
            return <Paragraph key={paragraph.id} paragraph={paragraph} />;
          })}
        </>
      )}
    </article>
  );
}
