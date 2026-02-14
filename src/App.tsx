import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { OriginalLanding } from './pages/OriginalLanding'
import { DesignToolVariant } from './pages/DesignToolVariant'
import { DevModeVariant } from './pages/DevModeVariant'
import { PortfolioVariant } from './pages/PortfolioVariant'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { ThankYou } from './pages/ThankYou'
import { OfferP } from './pages/OfferP'
import { OfferB } from './pages/OfferB'
import { OfferL } from './pages/OfferL'
import { OfferA } from './pages/OfferA'
import { OfferJ } from './pages/OfferJ'
import { OfferI } from './pages/OfferI'
import { NueveFolioDirect17 } from './pages/NueveFolioDirect17'
import { ValueOS } from './pages/ValueOS'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OriginalLanding />} />
        <Route path="/value-ts" element={<NueveFolioDirect17 />} />
        <Route path="/value-os" element={<ValueOS />} />
        <Route path="/design-tool" element={<DesignToolVariant />} />
        <Route path="/dev-mode" element={<DevModeVariant />} />
        <Route path="/portfolio" element={<PortfolioVariant />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/thank-you" element={<ThankYou />} />
        {/* Offer landing pages */}
        <Route path="/p" element={<OfferP />} />
        <Route path="/b" element={<OfferB />} />
        <Route path="/l" element={<OfferL />} />
        <Route path="/a" element={<OfferA />} />
        <Route path="/j" element={<OfferJ />} />
        <Route path="/i" element={<OfferI />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
