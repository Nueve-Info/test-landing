import { Hero } from '../components/sections/Hero'
import { IndustrySplit } from '../components/sections/IndustrySplit'
import { Transformation } from '../components/sections/Transformation'
import { PortfolioSystem } from '../components/sections/PortfolioSystem'
import { Mentors } from '../components/sections/Mentors'
import { Curriculum } from '../components/sections/Curriculum'
import { WhoIsFor } from '../components/sections/WhoIsFor'
import { SocialProof } from '../components/sections/SocialProof'
import { Pricing } from '../components/sections/Pricing'
import { FAQ } from '../components/sections/FAQ'
import { FinalCTA } from '../components/sections/FinalCTA'
import { Footer } from '../components/sections/Footer'
import { Navbar } from '../components/Navbar'
import { AnnouncementBar } from '../components/AnnouncementBar'
import { useCountdown } from '../hooks/useCountdown'
import { usePriceTest } from '../experiments/priceTest'

export function OriginalLanding() {
  const { price, priceLabel, priceId, variant } = usePriceTest()
  const { isExpired, isPaused } = useCountdown()
  const isTimerActive = !isExpired && !isPaused

  return (
    <main className="min-h-screen">
      <AnnouncementBar />
      <Navbar priceOverride={priceLabel} isTimerActive={isTimerActive} />
      <Hero priceLabel={priceLabel} />
      <IndustrySplit />
      <Transformation />
      <PortfolioSystem />
      <Mentors />
      <Curriculum />
      <WhoIsFor />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA price={price} priceId={priceId} variant={variant} />
      <Footer />
    </main>
  )
}
