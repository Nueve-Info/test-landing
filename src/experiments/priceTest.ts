import { useState, useEffect } from 'react'
import { capturePosthog } from '../lib/analytics'

/**
 * PostHog experiment: `price-test`
 *
 * - control (default): $37, CTA → /value-ts
 * - test:              $17, CTA → /value-os
 */

interface PriceTestResult {
  price: number
  priceLabel: string
  checkoutHref: string
  priceId: string
  variant: 'control' | 'test'
}

const STRIPE_PRICE_CONTROL = import.meta.env.VITE_STRIPE_PRICE_CONTROL || 'price_1T2WGuBskYNJtWpXEbqq50rM'
const STRIPE_PRICE_TEST = import.meta.env.VITE_STRIPE_PRICE_TEST || 'price_1T2WGuBskYNJtWpXEbqq50rM'

const CONTROL: PriceTestResult = {
  price: 37,
  priceLabel: '$37',
  checkoutHref: '/value-ts',
  priceId: STRIPE_PRICE_CONTROL,
  variant: 'control',
}

const TEST: PriceTestResult = {
  price: 17,
  priceLabel: '$17',
  checkoutHref: '/value-os',
  priceId: STRIPE_PRICE_TEST,
  variant: 'test',
}

function trackExposure(variant: string) {
  const key = 'ab_exposed__price-test'
  if (sessionStorage.getItem(key)) return
  sessionStorage.setItem(key, '1')
  capturePosthog('$experiment_exposure', {
    ab_experiment: 'price-test',
    ab_variant: variant,
  })
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

  // Fire exposure event once flags resolve
  useEffect(() => {
    if (result.variant) {
      trackExposure(result.variant)
    }
  }, [result.variant])

  return result
}
