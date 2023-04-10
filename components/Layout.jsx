import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <main className=' container mx-auto px-lg  py-4 bg-[#fafafa] overflow-hidden relative' >


    {/* <div className='absolute hidden lg:block md:top-[-1130px] md:right-[-360px] z-[1] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  from-[#06a5c580] to-[#fafafa]  from-2% to-20% h-full w-full' ></div>
<div className='absolute hidden lg:block top-[-1000px] z-[1] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-300 via-purple-200 from-2% to-30% h-full w-full' ></div> */}

    <Navbar />
    {children}
    <Footer />
    </main>
      
  )
}

export default Layout