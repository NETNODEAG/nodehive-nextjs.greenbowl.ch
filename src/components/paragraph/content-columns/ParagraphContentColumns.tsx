import Image from 'next/image';
import { DrupalParagraph } from '@/nodehive/types';

import { FormattedText } from '@/components/layout/FormattedText';

export interface ParagraphContentColumnsProps {
  paragraph: DrupalParagraph;
}

export default function ParagraphContentColumns({
  paragraph,
}: ParagraphContentColumnsProps) {
  const text = paragraph?.field_content_text;
  const media = paragraph?.field_content_media;
  const image = media?.field_media_image;
  const imageUrl = image?.image_style_uri?.wide;
  const imageAlt = image?.meta?.alt;

  return (
    <section data-paragraph-type="ContentColumns" className="py-12 md:py-20">
      <div className="container-wrapper">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="h-[330px] md:col-span-6 md:h-[730px]">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={1920}
              height={1080}
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="place-content-center md:col-span-4 md:col-start-8">
            {text && <FormattedText html={text?.processed} className="prose" />}
          </div>
        </div>
      </div>
    </section>
  );
}
