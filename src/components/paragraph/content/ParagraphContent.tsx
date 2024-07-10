import { DrupalParagraph } from '@/nodehive/types';

import { FormattedText } from '@/components/layout/FormattedText';

export interface ParagraphContentProps {
  paragraph: DrupalParagraph;
}

export default function ParagraphContent({ paragraph }: ParagraphContentProps) {
  const text = paragraph?.field_content_text;

  return (
    <section data-paragraph-type="Content" className="py-12 md:py-20">
      <div className="container-wrapper-sm">
        {text && <FormattedText html={text?.processed} className="prose" />}
      </div>
    </section>
  );
}
