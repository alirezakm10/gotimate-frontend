import { initialData } from '../initialData'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { RiCloseLine, RiCheckLine } from 'react-icons/ri'
import usePriceFormat from '@/hooks/usePriceFormat'

const PlanCard = ({plan}) => {
const { t } = useTranslation()

    const { popularSvg } = initialData

  return (
   <section className={`relative flex flex-col text-dimgot p-4 cursor-pointer rounded-[25px] hover:shadow-md hover:shadow-gray-300 transition-all bg-white hover:border-[1px] hover:border-gotimate
   `} >
    {/* badge container */}
    <section className='absolute top-[-32px] right-[-32px]' >
        {plan.popular ? popularSvg : ''}
    </section>
    <h1 className='text-2xl text-darkgot my-2' >{plan.name}</h1>
    <p className='text-[#5A595F] text-sm' >{plan.description}</p>

    <section className='flex flex-col items-center' >
    <div className='text-3xl text-darkgot mt-8' >{usePriceFormat(plan.price)} { typeof plan.price === "number" && <span className='text-dimgot text-sm ' >GTM</span>}</div>

<div className='text-[16px] my-4' >(10$) <span className='text-[12px]' >{t('psPPerproject')}</span></div>

<div className='text-gotimate py-1 bg-[#fafafa] rounded-full my-1 p-4 font-thin text-sm ' >{t('psPMaxquestion')}: <span className='text-gotimate font-semibold' >{plan.limits.max_questionnaires}</span></div>
<div className='text-gotimate py-1 bg-[#fafafa] rounded-full my-1 p-4 font-thin text-sm ' >{t('psPMinrewards')}: <span className='text-gotimate font-semibold' >{plan.limits.min_rewards}</span></div>

<Link href='/' >
<button className='text-darkgot px-9 py-3 my-8 shadow-md hover:shadow-md hover:text-white bg-white hover:bg-gray-400 transition-all  focus:outline-none  font-medium rounded-[10px]' >{t('psPStarBtn')}</button>
</Link>
    </section>

    {/* options */}
    <section className='flex flex-col gap-2 text-sm bg-[#fafafa] p-3 rounded-[10px]' >
        {/* one option */}
    <div className='flex justify-between' >
    <p>{t('psPMaxquestionary')}</p>
    <p className='text-darkgot text-[14px]' >{plan.limits.max_questions}</p>
    </div>
    <div className='flex justify-between' >
    <p>{t('psPExpiretime')}</p>
    <p className='text-darkgot text-[14px]' >{plan.validity}</p>
    </div>
    <div className='flex justify-between' >
    <p>{t('psPEasypresentation')}</p>
    {plan.easy_presentation ? <RiCheckLine size={25} color="#05697E" /> : <RiCloseLine size={25} /> }
    </div>
    <div className='flex justify-between' >
    <p>{t('psPRealtimereport')}</p>
    {plan.realtime_report ? <RiCheckLine size={25} color="#05697E" /> : <RiCloseLine size={25} />}
    </div>
    <div className='flex justify-between' >
    <p>{t('psPSmartvalidation')}</p>
    {plan.limits.validation_plus ? <RiCheckLine size={25} color="#05697E" /> : <RiCloseLine size={25} />}
    </div>
    <div className='flex justify-between' >
    <p>{t('psPSpecifictarget')}</p>
    {plan.specific_target ? <RiCheckLine size={25} color="#05697E" /> : <RiCloseLine size={25} />}
    </div>
    </section>
   </section>
  )
}

export default PlanCard