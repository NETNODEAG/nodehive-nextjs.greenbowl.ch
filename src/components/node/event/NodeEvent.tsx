import Image from 'next/image';
import { Locale } from '@/nodehive/i18n-config';
import { DrupalNode, DrupalParagraph } from '@/nodehive/types';
import { format } from 'date-fns';

import Paragraph from '@/components/paragraph/Paragraph';

export interface NodeEventProps {
  node: DrupalNode;
  lang: Locale;
}

export default function NodeEvent({ node, lang }: NodeEventProps) {
  const nodeData = node?.data;

  const title = nodeData?.title;
  const location = nodeData?.field_event_location;
  const date = nodeData?.field_event_date;
  const headerImage = nodeData?.field_header_image;
  const image = headerImage?.field_media_image;
  const imageUrl = image?.image_style_uri?.wide;
  const imageAlt = image?.meta?.alt;
  const paragraphs = nodeData?.field_paragraphs;

  return (
    <article data-node-type="Event">
      <div className="relative flex h-dvh max-h-[810px] items-center justify-center">
        {title && (
          <div className="container-wrapper flex items-center justify-center">
            <div className="z-10 flex flex-col items-center justify-center">
              <p className="byline mb-3 text-white">
                {format(date, 'd MMMM yyyy, HH:SS')}
              </p>

              <h1 className="text-center text-white">{title}</h1>

              <p className="mt-6 font-unbounded text-lg font-semibold uppercase tracking-wider text-primary">
                {location}
              </p>
            </div>
          </div>
        )}

        <Image
          src={imageUrl}
          alt={imageAlt}
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

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
