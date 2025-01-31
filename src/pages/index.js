import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Menu from '@/components/menu'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      <Navbar />
      <main className=" ">
        <About />
        <Menu />
      </main>
      <Footer />
    </div>
  )
}


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}