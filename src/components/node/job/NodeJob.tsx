import { DrupalNode } from '@/nodehive/types';

import { FormattedText } from '@/components/layout/FormattedText';

export interface NodeJobProps {
  node: DrupalNode;
}

export default function NodeJob({ node }: NodeJobProps) {
  const nodeData = node?.data;
  const title = nodeData?.title;
  const location = nodeData?.field_job_location;
  const workload = nodeData?.field_job_workload;
  const description = nodeData?.field_job_description;

  return (
    <article data-node-type="Job">
      <h1>{title}</h1>

      <ul>
        <li>{location}</li>
        <li>{workload}</li>
      </ul>

      {description && (
        <FormattedText html={description?.processed} className="prose" />
      )}
    </article>
  );
}
