import React from 'react'

const Loading = () => {
  return (
    <div className="container pt-6">
      {/* Project Title and URL Skeleton */}
      <div className="space-y-2 mb-8">
        <div className="h-8 bg-gray-200 rounded-md w-64 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded-md w-72 animate-pulse" />
      </div>
      
      {/* Project Description */}
      <div className="h-16 bg-gray-200 rounded-md w-full mb-8 animate-pulse" />
      
      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <div 
            key={item} 
            className="h-8 w-32 bg-gray-200 rounded-full animate-pulse" 
          />
        ))}
      </div>

      {/* Feature List */}
      <div className="space-y-4 mb-8">
        {[1, 2, 3, 4, 5].map((item) => (
          <div 
            key={item}
            className="flex items-center gap-2"
          >
            <div className="h-4 w-4 " />
            <div className="h-4 bg-gray-200 rounded w-96 animate-pulse" />
          </div>
        ))}
      </div>

      <div className="w-full h-[400px] bg-gray-200 rounded animate-pulse">

      </div>
    </div>
  )
}

export default Loading