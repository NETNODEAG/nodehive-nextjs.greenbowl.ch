import Image from 'next/image';
import { DrupalParagraph } from '@/nodehive/types';

export interface ParagraphHeaderProps {
  paragraph: DrupalParagraph;
}

export default function ParagraphHeader({ paragraph }: ParagraphHeaderProps) {
  const title = paragraph?.field_header_title;
  const media = paragraph?.field_header_media;
  const image = media?.field_media_image;
  const imageUrl = image?.image_style_uri?.wide;
  const imageAlt = image?.meta?.alt;

  return (
    <section data-paragraph-type="Header" className="paragraph">
      <div className="relative flex h-dvh max-h-[810px] items-center justify-center">
        {title && <h1 className="z-10 text-center">{title}</h1>}

        <Image
          src={imageUrl}
          alt={imageAlt}
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
