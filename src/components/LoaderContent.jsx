import React from 'react';

const LoaderContent = () => {
  return (
    <div className="flex flex-col bg-neutral-200 w-1/2 h-auto animate-pulse rounded-xl p-4 gap-4">
      <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md" />
      <div className="flex flex-col gap-2">
        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md" />
        <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md" />
        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md" />
        <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md" />
      </div>
    </div>
  );
}

export default LoaderContent;
