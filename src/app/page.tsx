import Image from 'next/image'
import { Inter } from 'next/font/google'
import Jumbotron from '@/components/Jumbotron'
import Navbar from '@/components/Navbar'
import Features from '@/components/Features'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Examples from '@/components/Examples'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Jumbotron />
      <Features />
      <Examples />
      <About />
      <FAQ />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
