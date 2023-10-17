import React from 'react';

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full h-16 w-16"></div>
    </div>
  );
}

export default Loader;
