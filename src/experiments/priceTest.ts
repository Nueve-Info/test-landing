import { useState, useEffect } from 'react'

/**
 * PostHog experiment: `price-test`
 *
 * - control (default): $27, CTA → /value-ts
 * - test:              $17, CTA → /value-os
 */

interface PriceTestResult {
  price: number
  priceLabel: string
  checkoutHref: string
  variant: 'control' | 'test'
}

const CONTROL: PriceTestResult = {
  price: 27,
  priceLabel: '$27',
  checkoutHref: '/value-ts',
  variant: 'control',
}

const TEST: PriceTestResult = {
  price: 17,
  priceLabel: '$17',
  checkoutHref: '/value-os',
  variant: 'test',
}

export function usePriceTest(): PriceTestResult {
  const [result, setResult] = useState<PriceTestResult>(() => {
    // Check immediately in case flags are already loaded
    if (window.posthog?.getFeatureFlag('price-test') === 'test') {
      return TEST
    }
    return CONTROL
  })

  useEffect(() => {
    const checkFlag = () => {
      if (window.posthog?.getFeatureFlag('price-test') === 'test') {
        setResult(TEST)
      } else {
        setResult(CONTROL)
      }
    }

    // Check once on mount
    checkFlag()
    
    // Subscribe to flag changes
    if (window.posthog?.onFeatureFlags) {
      window.posthog.onFeatureFlags(checkFlag)
    }
  }, [])

  return result
}
