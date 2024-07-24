import React from 'react';

interface DebugProps {
  name?: string;
  data: any;
}

const Debug: React.FC<DebugProps> = ({ name, data }) => {
  return (
    <div className="mb-4">
      <pre className="overflow-x-auto rounded bg-gray-100 p-4 text-xs">
        <details>
          <summary>{name && <span>{name}</span>}</summary>
          <p>{JSON.stringify(data, null, 2)}</p>
        </details>
      </pre>
    </div>
  );
};

export default Debug;
