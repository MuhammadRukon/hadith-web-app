import React from 'react'

const PageContainer = ({children}) => {
  return (
    <div className="min-h-[calc(100vh-146px)] text-[#0e1037] dark:text-[#fefdf8] pt-10 font-secondary">
       {children}
      </div>
  )
}

export default PageContainer