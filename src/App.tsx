import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavigationMenu } from './components/NavigationMenu'
import { OriginalLanding } from './pages/OriginalLanding'
import { DesignToolVariant } from './pages/DesignToolVariant'
import { DevModeVariant } from './pages/DevModeVariant'
import { PortfolioVariant } from './pages/PortfolioVariant'

function App() {
  return (
    <BrowserRouter>
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<OriginalLanding />} />
        <Route path="/design-tool" element={<DesignToolVariant />} />
        <Route path="/dev-mode" element={<DevModeVariant />} />
        <Route path="/portfolio" element={<PortfolioVariant />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
