import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import CarSelection from '@/components/CarSelection'
import VideoSection from '@/components/VideoSection'
import Reviews from '@/components/Reviews'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <CarSelection />
      <VideoSection />
      <Reviews />
    </main>
  )
}
