import Image from 'next/image';
import { DrupalParagraph } from '@/nodehive/types';

export interface ParagraphTeaserListProps {
  paragraph: DrupalParagraph;
}

export default function ParagraphTeaserList({
  paragraph,
}: ParagraphTeaserListProps) {
  const contentRef = paragraph?.field_teaser_list_ref_content;

  return (
    <section data-paragraph-type="TeaserList" className="paragraph">
      Paragraph Teaser-List
    </section>
  );
}
