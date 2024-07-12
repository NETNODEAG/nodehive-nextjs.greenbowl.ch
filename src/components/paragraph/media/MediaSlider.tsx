'use client';

import '@splidejs/react-splide/css/core';

import Image from 'next/image';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

export default function MediaSlider({ media }) {
  return (
    <Splide
      hasTrack={false}
      aria-label="Media Slider"
      options={{
        type: 'loop',
        perPage: 3,
        height: '550px',
        padding: { right: '10%' },
        pagination: false,
        arrows: false,
        breakpoints: {
          1024: {
            perPage: 1,
            height: '350px',
            padding: { right: '10%' },
          },
        },
      }}
    >
      <SplideTrack>
        {media.map((item) => {
          return (
            <SplideSlide key={item?.id} className="relative">
              {item?.type === 'media--image' && (
                <Image
                  src={item?.field_media_image?.image_style_uri?.wide}
                  alt={item.field_media_image?.meta?.alt}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover object-center"
                />
              )}
            </SplideSlide>
          );
        })}
      </SplideTrack>
    </Splide>
  );
}
