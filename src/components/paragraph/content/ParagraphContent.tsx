import { DrupalParagraph } from '@/nodehive/types';

import { FormattedText } from '@/components/layout/FormattedText';

export interface ParagraphContentProps {
  paragraph: DrupalParagraph;
}

export default function ParagraphContent({ paragraph }: ParagraphContentProps) {
  const text = paragraph.field_content_text;

  return (
    <section
      data-paragraph-type="Content"
      className="bg-primary py-48 text-white"
    >
      <div className="container-wrapper">
        {text && (
          <FormattedText
            html={text?.processed}
            className="prose text-center font-unbounded text-6xl font-bold leading-tight text-white"
          />
        )}
      </div>
    </section>
  );
}
