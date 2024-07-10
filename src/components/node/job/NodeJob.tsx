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
      <div className="container-wrapper flex flex-col items-center justify-center gap-6 pt-20">
        <h1 className="text-center">{title}</h1>

        <ul className="text-center">
          <li>
            <p className="font-unbounded text-lg font-semibold uppercase">
              {workload}
            </p>
          </li>
          <li>
            <p className="font-unbounded text-lg font-semibold uppercase tracking-wider text-primary">
              {location}
            </p>
          </li>
        </ul>
      </div>

      <div className="container-wrapper-sm py-32 md:py-48">
        {description && (
          <FormattedText html={description?.processed} className="prose" />
        )}
      </div>
    </article>
  );
}
