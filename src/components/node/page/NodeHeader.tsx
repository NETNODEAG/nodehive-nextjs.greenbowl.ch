import Image from 'next/image';

import AnimatedWrapper from '@/components/animations/AnimtedWrapper';
import { FormattedText } from '@/components/layout/FormattedText';

export interface NodeHeaderProps {}

export default function NodeHeader({ title, media, variant }) {
  const image = media?.field_media_image;
  const imageUrl = image?.image_style_uri?.wide;
  const imageAlt = image?.meta?.alt;

  return (
    <section>
      <AnimatedWrapper>
        <div className="relative flex h-dvh max-h-[810px] items-center justify-center">
          {variant === 'header-hero' && (
            <>
              {title && (
                <div className="container-wrapper flex items-center justify-center">
                  <FormattedText
                    html={title?.processed}
                    className="z-10 text-center text-white"
                  />
                </div>
              )}
            </>
          )}

          {variant === 'header-stacking' && (
            <>
              {title && (
                <div className="absolute bottom-4 left-0 right-0 z-20 text-primary md:-bottom-[40px]">
                  <div className="container-wrapper flex items-center justify-center">
                    <FormattedText
                      html={title?.processed}
                      className="z-10 text-center !text-[14rem] text-primary"
                    />
                  </div>
                </div>
              )}
            </>
          )}

          {variant === 'header-basic' && (
            <>
              {title && (
                <div className="container-wrapper flex items-center justify-center">
                  <FormattedText
                    html={title?.processed}
                    className="z-10 text-center text-white"
                  />
                </div>
              )}
            </>
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
      </AnimatedWrapper>
    </section>
  );
}
