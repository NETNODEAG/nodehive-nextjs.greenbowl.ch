import NodeWrapper from '@/nodehive/components/visual-editor/node/node-wrapper';
import { Locale } from '@/nodehive/i18n-config';
import { DrupalNode } from '@/nodehive/types';

import { isNodeType, nodeTypes } from './nodes';

interface NodeProps {
  node: DrupalNode;
  lang: Locale;
}

export default function Node({ node, lang }: NodeProps) {
  const nodeType = node?.data?.type;

  if (isNodeType(nodeType)) {
    const NodeInstance = nodeTypes[nodeType];
    return (
      <NodeWrapper entity={node?.data}>
        <NodeInstance node={node} lang={lang} />
      </NodeWrapper>
    );
  }

  return null;
}
