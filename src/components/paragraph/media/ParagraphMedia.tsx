import Image from 'next/image';
import { DrupalParagraph } from '@/nodehive/types';

import MediaSlider from '@/components/paragraph/media/MediaSlider';

export interface ParagraphMediaProps {
  paragraph: DrupalParagraph;
}

export default function ParagraphMedia({ paragraph }: ParagraphMediaProps) {
  const mediaArray = paragraph?.field_media_ref_media;
  let media = null;

  if (mediaArray && mediaArray.length === 1) {
    media = mediaArray[0];
  }

  if (mediaArray && mediaArray.length > 1) {
    media = mediaArray;
  }

  const image = media?.field_media_image;
  const imageUrl = image?.image_style_uri?.wide;
  const imageAlt = image?.meta?.alt;

  return (
    <section data-paragraph-type="Media" className="paragraph">
      {mediaArray.length === 1 ? (
        <div className="relative h-[350px] md:h-[730px]">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
      ) : (
        <MediaSlider media={mediaArray} />
      )}
    </section>
  );
}
