"use client";

import CountUp from "react-countup";

export default function Stats() {
  return (
    <div className="mt-14 flex flex-wrap gap-10">
      <div>
        <h3 className="text-4xl font-bold text-blue-500">
          <CountUp end={200} duration={3} />+
        </h3>
        <p className="text-gray-400">Client</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-blue-500">
          <CountUp end={500} duration={3} />+
        </h3>
        <p className="text-gray-400">Project</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-blue-500">
          <CountUp end={98} duration={3} />%
        </h3>
        <p className="text-gray-400">Satisfaction</p>
      </div>
    </div>
  );
}