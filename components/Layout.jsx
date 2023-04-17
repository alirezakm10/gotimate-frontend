import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <main className=' px-[14px] mx-auto lg:container bg-[#fafafa] py-4 bg-transparent  relative overflow-hidden lg:overflow-visible' >
<Navbar />
    {children}
    <Footer />
    </main>
    </>
  )
}

export default Layout