import { FunctionComponent } from 'react';

import ParagraphContent, {
  ParagraphContentProps,
} from './content/ParagraphContent';
import ParagraphHeader, {
  ParagraphHeaderProps,
} from './header/ParagraphHeader';
import ParagraphMedia, { ParagraphMediaProps } from './media/ParagraphMedia';
import ParagraphTeaserList, {
  ParagraphTeaserListProps,
} from './teaser-list/ParagraphTeaserList';

interface ParagraphPropMap {
  'paragraph--content': ParagraphContentProps;
  'paragraph--header': ParagraphHeaderProps;
  'paragraph--media': ParagraphMediaProps;
  'paragraph--teaser_list': ParagraphTeaserListProps;
}

type ParagraphTypes = {
  [K in keyof ParagraphPropMap]: FunctionComponent<ParagraphPropMap[K]>;
};

export function isParagraphType(key: string): key is keyof ParagraphTypes {
  return key in paragraphTypes;
}

export const paragraphTypes: ParagraphTypes = {
  'paragraph--content': ParagraphContent,
  'paragraph--header': ParagraphHeader,
  'paragraph--media': ParagraphMedia,
  'paragraph--teaser_list': ParagraphTeaserList,
};
