import React from 'react'
import { useState } from 'react'


const CustomAccordion = ({ title, items }) => {
  const [showDetail, setShowDetail] = useState(null)
  const expandHandler = (index) => {
    if (showDetail === index) setShowDetail(null)
    else setShowDetail(index)
  }
  return (
    <div className="bg-[#101828]">
      <div className="max-w-7xl mx-auto p-5 text-white font-semibold">
        {title && <p className='text-3xl text-center py-10'>{title}</p>}
        {items && items.map((item, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div onClick={() => expandHandler(index)} className={`p-3 md:p-6 flex gap-1 justify-between border-b border-gray-800 cursor-pointer`}>
              <p className='w-[95%] font-bold text-lg'>{item.title}</p>
              <p className='w-[2%] text-2xl text-yellow-700'>{showDetail !== index ? '+' : '-'}</p>
            </div>
            <p className={`${showDetail === index ? 'visible' : 'hidden'} px-3 md:px-6 pb-4 border-b border-gray-800`}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomAccordion