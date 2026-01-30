import { Hero } from '../components/sections/Hero'
import { IndustrySplit } from '../components/sections/IndustrySplit'
import { Transformation } from '../components/sections/Transformation'
import { PortfolioSystem } from '../components/sections/PortfolioSystem'
import { Curriculum } from '../components/sections/Curriculum'
import { WhoIsFor } from '../components/sections/WhoIsFor'
import { SocialProof } from '../components/sections/SocialProof'
import { Pricing } from '../components/sections/Pricing'
import { FAQ } from '../components/sections/FAQ'
import { FinalCTA } from '../components/sections/FinalCTA'

export function OriginalLanding() {
  return (
    <main className="min-h-screen">
      <Hero />
      <IndustrySplit />
      <Transformation />
      <PortfolioSystem />
      <Curriculum />
      <WhoIsFor />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
