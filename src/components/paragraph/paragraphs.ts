import { FunctionComponent } from 'react';

import ParagraphContent, {
  ParagraphContentProps,
} from './content/ParagraphContent';
import ParagraphHeader, {
  ParagraphHeaderProps,
} from './header/ParagraphHeader';

interface ParagraphPropMap {
  'paragraph--content': ParagraphContentProps;
  'paragraph--header': ParagraphHeaderProps;
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
};
