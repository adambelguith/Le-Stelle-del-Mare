import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Menu from '@/components/menu'

const inter = Inter({ subsets: ['latin'] })

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
