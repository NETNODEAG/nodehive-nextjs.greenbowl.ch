import { DrupalParagraph } from '@/nodehive/types';

import { FormattedText } from '@/components/layout/FormattedText';

export interface ParagraphContentProps {
  paragraph: DrupalParagraph;
}

export default function ParagraphContent({ paragraph }: ParagraphContentProps) {
  const text = paragraph.field_content_text;

  return (
    <section data-paragraph-type="Content" className="paragraph">
      <div className="container-wrapper">
        {text && <FormattedText html={text?.processed} className="prose" />}
      </div>
    </section>
  );
}
