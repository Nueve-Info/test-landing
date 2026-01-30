import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { OriginalLanding } from './pages/OriginalLanding'
import { DesignToolVariant } from './pages/DesignToolVariant'
import { DevModeVariant } from './pages/DevModeVariant'
import { PortfolioVariant } from './pages/PortfolioVariant'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { ThankYou } from './pages/ThankYou'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OriginalLanding />} />
        <Route path="/design-tool" element={<DesignToolVariant />} />
        <Route path="/dev-mode" element={<DevModeVariant />} />
        <Route path="/portfolio" element={<PortfolioVariant />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
