import { FunctionComponent } from 'react';

import ParagraphContent, {
  ParagraphContentProps,
} from './content/ParagraphContent';
import ParagraphEyecatcher, {
  ParagraphEyecatcherProps,
} from './eyecatcher/ParagraphEyecatcher';
import ParagraphMedia, { ParagraphMediaProps } from './media/ParagraphMedia';
import ParagraphTeaserList, {
  ParagraphTeaserListProps,
} from './teaser-list/ParagraphTeaserList';

interface ParagraphPropMap {
  'paragraph--content': ParagraphContentProps;
  'paragraph--media': ParagraphMediaProps;
  'paragraph--teaser_list': ParagraphTeaserListProps;
  'paragraph--eyecatcher': ParagraphEyecatcherProps;
}

type ParagraphTypes = {
  [K in keyof ParagraphPropMap]: FunctionComponent<ParagraphPropMap[K]>;
};

export function isParagraphType(key: string): key is keyof ParagraphTypes {
  return key in paragraphTypes;
}

export const paragraphTypes: ParagraphTypes = {
  'paragraph--content': ParagraphContent,
  'paragraph--media': ParagraphMedia,
  'paragraph--teaser_list': ParagraphTeaserList,
  'paragraph--eyecatcher': ParagraphEyecatcher,
};
