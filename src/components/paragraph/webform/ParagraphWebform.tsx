'use client';

import { Locale } from '@/nodehive/i18n-config';
import { DrupalParagraph } from '@/nodehive/types';
import IframeResizer from '@iframe-resizer/react';

export interface ParagraphWebformProps {
  paragraph: DrupalParagraph;
  lang: Locale;
}

export default function ParagraphWebform({
  paragraph,
  lang,
}: ParagraphWebformProps) {
  const webform = paragraph.field_webform_ref_form;
  const webformId = webform?.meta?.drupal_internal__target_id;

  return (
    <section
      data-paragraph-type="Webform"
      className="paragraph container-wrapper-sm px-1 md:px-8"
    >
      {webformId && (
        <IframeResizer
          title={`Webform: ${webformId}`}
          license="GPLv3"
          inPageLinks
          src={`${process.env.NEXT_PUBLIC_DRUPAL_REST_BASE_URL}/${lang}/webform/${webformId}/share/iframe-resizer/4.2.10`}
          style={{ width: '100%', height: '100vh' }}
          direction="vertical"
        />
      )}
    </section>
  );
}
