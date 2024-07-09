import { FunctionComponent } from 'react';

import NodeEvent, { NodeEventProps } from './event/NodeEvent';
import NodeJob, { NodeJobProps } from './job/NodeJob';
import NodePage, { NodePageProps } from './page/NodePage';

interface NodePropMap {
  'node--page': NodePageProps;
  'node--job': NodeJobProps;
  'node--event': NodeEventProps;
}

type NodeTypes = {
  [K in keyof NodePropMap]: FunctionComponent<NodePropMap[K]>;
};

export function isNodeType(key: string): key is keyof NodeTypes {
  return key in nodeTypes;
}

export const nodeTypes: NodeTypes = {
  'node--page': NodePage,
  'node--job': NodeJob,
  'node--event': NodeEvent,
};
