export const NodeHiveConfig = {
  entities: {
    'node-page': {
      addInclude: [
        'field_header_image',
        'field_header_image.field_media_image',
        'field_paragraphs',
        'field_paragraphs.field_media_ref_media',
        'field_paragraphs.field_media_ref_media.field_media_image',
      ],
      'media-image': {
        addFilter: [['status', '1']],
        addInclude: ['field_media_image'],
      },
    },
  },
};
