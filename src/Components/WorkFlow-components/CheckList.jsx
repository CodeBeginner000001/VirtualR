import React from 'react'
import CheckCircle from './CheckCircle.jsx'
import CheckList_Heading from './CheckList_Heading.jsx'
import CheckList_Para from './CheckList_Para.jsx'
export default function CheckList({checklistItems}) {
  return (
    <>
      <div className='pt-12 w-full lg:w-1/2'>
            {  checklistItems.map((item, index) => (
                    <div key={index} className='flex mb-12'>
                            <CheckCircle/>
                            <div>
                               <CheckList_Heading title={item.title}/>
                               <CheckList_Para description={item.description}/>
                            </div>
                    </div>
                ))
            }
       </div>
    </>
  )
}
