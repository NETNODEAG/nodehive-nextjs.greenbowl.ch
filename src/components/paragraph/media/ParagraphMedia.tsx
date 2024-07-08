import Image from 'next/image';
import { DrupalParagraph } from '@/nodehive/types';

export interface ParagraphMediaProps {
  paragraph: DrupalParagraph;
}

export default function ParagraphMedia({ paragraph }: ParagraphMediaProps) {
  const media = paragraph?.field_media_ref_media;
  const image = media?.field_media_image;
  const imageUrl = image?.image_style_uri?.wide;
  const imageAlt = image?.meta?.alt;

  return (
    <section data-paragraph-type="Media" className="paragraph">
      Paragraph Media
    </section>
  );
}
