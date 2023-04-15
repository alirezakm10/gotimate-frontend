import "@/styles/globals.css";
import Layout from "@/components/Layout";
import {Manrope} from '@next/font/google'


const manrope = Manrope({ subsets: ['latin'],weight:['300','500','700'] })

export default function App({ Component, pageProps }) {
  return (
    <div className={`${manrope.className}  bg-gradient-blue-300 to-white via-purple-500 from-10% to-50% `}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  );
}
