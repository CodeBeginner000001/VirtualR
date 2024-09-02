import React from 'react'
import CodeImg from './CodeImg.jsx'
import CheckList from './CheckList.jsx'
export default function Body({checklistItems,codeImg}) {
  return (
    <>
      <div className='flex flex-wrap justify-center'>
            <CodeImg codeImg={codeImg}/>
            <CheckList checklistItems={checklistItems}/>
      </div>
    </>
  )
}
