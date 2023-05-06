import { initialData } from '../initialData'
import Link from 'next/link'

const PlanCard = () => {
    const { tick, popularSvg } = initialData



  return (
   <section className={`relative flex flex-col text-dimgot p-4 cursor-pointer rounded-[25px]  transition-all bg-white hover:border-[1px] hover:border-gotimate
   `} >
    {/* badge container */}
    <section className='absolute top-[-32px] right-[-32px]' >
        {popularSvg}
    </section>
    <h1 className='text-2xl text-darkgot my-2' >Startup</h1>
    <p className='text-[#5A595F] text-sm' >Lorem ipsum dolor  amet, constetur adipiscing elit .</p>

    <div className='text-3xl text-darkgot mt-8' >50.000 <span className='text-dimgot' >GTM</span></div>

    <div className='text-[16px] my-4' >(10$) <span className='text-[12px]' >Per project</span></div>

    <p className='text-gotimate py-1' >25 max questions </p>
    <p className='text-gotimate py-1' >100 Min rewards</p>

   <Link href='/' >
    <button className='text-darkgot my-8 ' >Start with this</button>
   </Link>

    {/* options */}
    <section className='flex flex-col text-sm bg-[#fafafa] p-3 rounded-[10px]' >
        {/* one option */}
    <div className='flex justify-between' >
    <p>Max questionary</p>
    <p className='text-darkgot text-[14]' >10</p>
    </div>
    <div className='flex justify-between' >
    <p>Expire time</p>
    <p className='text-darkgot text-[14]' >10 Day</p>
    </div>
    <div className='flex justify-between' >
    <p>Easy presentation</p>
    {tick}
    </div>
    <div className='flex justify-between' >
    <p>Realtime report</p>
    {tick}
    </div>
    <div className='flex justify-between' >
    <p>Smart validation</p>
    {tick}
    </div>
    <div className='flex justify-between' >
    <p>Specific target</p>
    {tick}
    </div>
    </section>
   </section>
  )
}

export default PlanCard