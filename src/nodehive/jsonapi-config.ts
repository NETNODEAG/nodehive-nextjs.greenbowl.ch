export const NodeHiveConfig = {
  entities: {
    'node-page': {
      addInclude: [
        'field_header_image',
        'field_header_image.field_media_image',
        'field_paragraphs',
        'field_paragraphs.field_media_ref_media',
        'field_paragraphs.field_media_ref_media.field_media_image',
        'field_paragraphs.field_content_media',
        'field_paragraphs.field_content_media.field_media_image',
      ],
    },
    'node-event': {
      addInclude: [
        'field_header_image',
        'field_header_image.field_media_image',
        'field_paragraphs',
        'field_paragraphs.field_media_ref_media',
        'field_paragraphs.field_media_ref_media.field_media_image',
      ],
    },
  },
};
