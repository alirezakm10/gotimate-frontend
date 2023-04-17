import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
<Navbar />
    <main className=' container mx-auto px-lg bg-[#fafafa] py-4 bg-transparent  relative overflow-hidden sm:overflow-visible' >
    {children}
    <Footer />
    </main>
    </>
  )
}

export default Layout