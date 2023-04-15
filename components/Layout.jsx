import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <main className=' container mx-auto px-lg bg-[#fafafa] py-4 bg-transparent overflow-hidden relative' >



    <Navbar />
    {children}
    <Footer />
    </main>
      
  )
}

export default Layout