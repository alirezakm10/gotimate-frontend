import { useEffect } from 'react'
import { useRouter } from 'next/router'
import comingsoon from './comingsoon'

const partnership = () => {
  const router = useRouter()

  useEffect(() => {
    if(router.pathname.includes('/partnership')){
      router.push('/commingsoon')
    }
  },[])
  return (
    <div>partnership</div>
  )
}

export default partnership