import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Beneficios from '@/components/Beneficios'
import Sobre from '@/components/Sobre'
import Depoimentos from '@/components/Depoimentos'
import FAQ from '@/components/FAQ'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Beneficios />
        <Sobre />
        <Depoimentos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
