import Navbar from '@/components/Navbar'
import Image from 'next/image'
import HomePage from '@/components/HomePage'

export default function Home() {
  return (
    <main className="m-0 bg-black text-white overflow-x-hidden">
        <Navbar/>
        <HomePage/>
    </main>
  )
}
