import React from 'react'
import Image from 'next/image'

const LeftSide = () => {
  return (
    <div className='md:h-[500px] md:w-[553px] bg-red-40 flex gap-4 md:flex-row flex-col'>
    {/* small images group */}
    <div className='md:w-[76px] w-full h-[80px] md:h-[416px] flex md:flex-col flex-row justify-between  '>
    {/* box1 */}
  
      <Image src={'/images/products/OutDoorsofaset.png'} alt='hero' width={76} height={80} className="w-[76px] h-[80px]  bg-peach"/>

    {/* box2 */}

    <Image src={'/images/products/Outdoorsofaset_2.png'} alt='hero' width={76} height={80} className="w-[76px] h-[80px]  bg-peach"/>

    {/* box3 */}
    <Image src={'/images/products/Stuartsofa1.png'} alt='hero' width={76} height={80} className="w-[76px] h-[80px]  bg-peach"/>

    {/* box4 */}
    <Image src={'/images/products/Mayasofathreeseater.png'} alt='hero' width={76} height={80} className="w-[76px] h-[80px]  bg-peach"/>

    </div>
    {/* main prod image big one */}
    <div className='md:w-[481px] md:h-[500px] '>
      <Image src={'/images/products/Asgaardsofa3.png'} alt='hero' width={480} height={500} className='md:h-[500px] w-[481px] bg-peach' />
    </div>
  </div>
  )
}

export default LeftSide
