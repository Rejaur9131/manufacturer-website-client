import React, { useEffect, useState } from 'react';
import ToolsInfoCard from './ToolsInfoCard';
import axios from 'axios';

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    axios
      .get('tools.json')
      .then((response) => setTools(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 className="text-3xl text-red-500 font-bold py-5">Tools Available</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {tools.map((tool) => (
          <ToolsInfoCard key={tool.id} tool={tool}></ToolsInfoCard>
        ))}
      </div>
    </div>
  );
};

export default Tools;
