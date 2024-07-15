import { FunctionComponent } from 'react';

import ParagraphContentColumns, {
  ParagraphContentColumnsProps,
} from './content-columns/ParagraphContentColumns';
import ParagraphContent, {
  ParagraphContentProps,
} from './content/ParagraphContent';
import ParagraphCallToAction, {
  ParagraphCallToActionProps,
} from './cta/ParagraphCallToAction';
import ParagraphEyecatcher, {
  ParagraphEyecatcherProps,
} from './eyecatcher/ParagraphEyecatcher';
import ParagraphMedia, { ParagraphMediaProps } from './media/ParagraphMedia';
import ParagraphTeaserList, {
  ParagraphTeaserListProps,
} from './teaser-list/ParagraphTeaserList';
import ParagraphWebform, {
  ParagraphWebformProps,
} from './webform/ParagraphWebform';

interface ParagraphPropMap {
  'paragraph--content': ParagraphContentProps;
  'paragraph--media': ParagraphMediaProps;
  'paragraph--teaser_list': ParagraphTeaserListProps;
  'paragraph--eyecatcher': ParagraphEyecatcherProps;
  'paragraph--webform': ParagraphWebformProps;
  'paragraph--cta': ParagraphCallToActionProps;
  'paragraph--content_columns': ParagraphContentColumnsProps;
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
  'paragraph--webform': ParagraphWebform,
  'paragraph--cta': ParagraphCallToAction,
  'paragraph--content_columns': ParagraphContentColumns,
};
