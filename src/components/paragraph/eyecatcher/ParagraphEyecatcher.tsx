import Link from 'next/link';
import { Locale } from '@/nodehive/i18n-config';
import { DrupalParagraph } from '@/nodehive/types';

import { cn, internalLinkUriToSlug } from '@/lib/utils';
import { FormattedText } from '@/components/layout/FormattedText';

export interface ParagraphEyecatcherProps {
  paragraph: DrupalParagraph;
  lang: Locale;
}

export default function ParagraphEyecatcher({
  paragraph,
  lang,
}: ParagraphEyecatcherProps) {
  const variant = paragraph?.field_eyecatcher_variant;
  const byline = paragraph?.field_eyecatcher_byline;
  const text = paragraph?.field_eyecatcher_text;
  const cta = paragraph?.field_eyecatcher_cta;
  const ctaUrl = internalLinkUriToSlug(cta?.uri);
  const ctaLabel = cta?.title;

  return (
    <section
      data-variant={variant}
      className={cn(
        variant === 'eyecatcher-primary' && 'bg-primary text-white',
        variant === 'eyecatcher-secondary' && 'bg-secondary text-white',
        variant === 'eyecatcher-white' && 'bg-white text-secondary',
        'py-32 md:py-48'
      )}
    >
      <div className="container-wrapper flex flex-col justify-center">
        {byline && (
          <p className="mb-2 text-center text-base uppercase tracking-[0.3rem] md:text-xl">
            {byline}
          </p>
        )}

        {text && (
          <FormattedText
            html={text?.processed}
            className={cn(
              variant === 'eyecatcher-primary' &&
                'bg-primary text-white prose-strong:text-secondary',
              variant === 'eyecatcher-secondary' &&
                'bg-secondary text-white prose-strong:text-primary',
              variant === 'eyecatcher-white' &&
                'text-secondary prose-strong:text-primary',
              'prose text-center font-unbounded text-xl font-bold md:text-6xl md:leading-tight'
            )}
          />
        )}

        {ctaUrl && (
          <Link
            href={ctaUrl}
            className={cn(
              variant === 'eyecatcher-primary'
                ? 'btn-secondary'
                : 'btn-primary',
              'mt-5 md:mt-10'
            )}
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
