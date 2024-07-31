import { AuthWrapper } from '@/nodehive/components/auth/AuthWrapper';
import NodeEditButton from '@/nodehive/components/visual-editor/node/node-edit-button';
import { Locale } from '@/nodehive/i18n-config';
import { DrupalNode, DrupalParagraph } from '@/nodehive/types';

import AnimatedWrapper from '@/components/animation/AnimtedWrapper';
import { FormattedText } from '@/components/layout/FormattedText';
import Paragraph from '@/components/paragraph/Paragraph';
import NodeHeader from './NodeHeader';

export interface NodePageProps {
  node: DrupalNode;
  lang: Locale;
}

export default function NodePage({ node, lang }: NodePageProps) {
  const nodeData = node?.data;
  const headerVariant = nodeData?.field_header_variant;
  const headerText = nodeData?.field_header_text;
  const headerImage = nodeData?.field_header_image;
  const paragraphs = nodeData?.field_paragraphs;

  return (
    <article data-node-type="Page">
      <AuthWrapper>
        <NodeEditButton node={node} />
      </AuthWrapper>

      {headerImage?.id ? (
        <NodeHeader
          title={headerText}
          media={headerImage}
          variant={headerVariant}
        />
      ) : (
        <>
          {headerText && (
            <AnimatedWrapper>
              <FormattedText
                html={headerText?.processed}
                className="py-20 text-center"
              />
            </AnimatedWrapper>
          )}
        </>
      )}

      {Array.isArray(paragraphs) && (
        <>
          {paragraphs?.map((paragraph: DrupalParagraph) => {
            return (
              <Paragraph key={paragraph.id} paragraph={paragraph} lang={lang} />
            );
          })}
        </>
      )}
    </article>
  );
}
