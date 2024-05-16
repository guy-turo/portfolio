import React from 'react';

const Skeleton = ({ width, height, borderRadius }) => {
  return (
    <div
      className={`w-${width} h-${height} bg-gray-200 rounded-${borderRadius} animate-pulse`}
    ></div>
  );
};

export default Skeleton;