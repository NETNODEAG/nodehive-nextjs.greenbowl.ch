import { DrupalNode } from '@/nodehive/types';

export interface NodeEventProps {
  node: DrupalNode;
}

export default function NodeEvent({ node }: NodeEventProps) {
  const nodeData = node?.data;
  const title = nodeData?.title;

  return (
    <article data-node-type="Event">
      <h1>{title}</h1>
    </article>
  );
}
