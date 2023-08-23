import React from 'react'

const loading = () => {
  return (
    <>
      <div className="max-w-sm animate-pulse">
        <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
        <span className="sr-only">Loading...</span>
      </div>
      <div className="max-w-sm animate-pulse">
        <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <span className="sr-only">Loading...</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-pulse">
        <div className="h-20 bg-gray-200 rounded-lg dark:bg-gray-700 max-w-full py-4"></div>
        <div className="h-20 bg-gray-200 rounded-lg dark:bg-gray-700 max-w-full py-4"></div>
        <div className="h-20 bg-gray-200 rounded-lg dark:bg-gray-700 max-w-full py-4"></div>
        <div className="h-20 bg-gray-200 rounded-lg dark:bg-gray-700 max-w-full py-4"></div>
        <div className="h-20 bg-gray-200 rounded-lg dark:bg-gray-700 max-w-full py-4"></div>
        <div className="h-20 bg-gray-200 rounded-lg dark:bg-gray-700 max-w-full py-4"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  )
}

export default loading