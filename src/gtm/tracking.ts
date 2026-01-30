/**
 * GTM DataLayer tracking module
 * Installs a single global click/keyboard listener that pushes events
 * to window.dataLayer based on data-event attributes.
 */

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    __gtmTrackingInstalled?: boolean
    fbq?: (action: string, event: string, params?: Record<string, unknown>) => void
  }
}

// Guard against duplicate installs (StrictMode / HMR)
if (!window.__gtmTrackingInstalled) {
  window.__gtmTrackingInstalled = true
  window.dataLayer = window.dataLayer || []

  function attr(el: Element, name: string): string | null {
    const v = el.getAttribute(name)
    return v && v.trim() || null
  }

  function findTrackedTarget(start: EventTarget | null): HTMLElement | null {
    let el = start as HTMLElement | null
    while (el && el !== document.documentElement) {
      if (attr(el, 'data-event')) return el
      el = el.parentElement
    }
    return null
  }

  function push(payload: Record<string, unknown>) {
    window.dataLayer.push(payload)
  }

  function handleCtaClick(el: HTMLElement) {
    const ctaType = attr(el, 'data-cta-type') || attr(el, 'data-cta_type') || 'unknown'
    const ctaPlacement = attr(el, 'data-cta-placement') || attr(el, 'data-cta_placement') || attr(el, 'data-cta_location') || 'unknown'
    
    push({
      event: 'cta_click',
      cta_type: ctaType,
      cta_placement: ctaPlacement,
      cta_label: (el.innerText && el.innerText.trim()) || attr(el, 'aria-label') || 'cta',
      cta_href: (el as HTMLAnchorElement).href || attr(el, 'href') || null,
      page_path: location.pathname,
      page_title: document.title
    })

    // Meta Pixel: Track AddToCart for "start" CTA buttons
    if (ctaType === 'start' && window.fbq) {
      window.fbq('track', 'AddToCart', {
        content_name: (el.innerText && el.innerText.trim()) || 'Start CTA',
        content_category: 'CTA',
        content_ids: ['start_cta'],
        value: 27,
        currency: 'USD'
      })
    }
  }

  function handleSelectPlan(el: HTMLElement) {
    const priceStr = attr(el, 'data-price')
    const planType = attr(el, 'data-plan-type') || attr(el, 'data-plan_type') || null
    const price = priceStr ? Number(priceStr) : null
    const currency = attr(el, 'data-currency') || 'USD'
    const ctaLabel = (el.innerText && el.innerText.trim()) || attr(el, 'aria-label') || 'select_plan'
    
    push({
      event: 'select_plan',
      plan_type: planType,
      billing: attr(el, 'data-billing') || null,
      price: price,
      currency: currency,
      stripe_url: attr(el, 'data-stripe-url') || attr(el, 'data-stripe_url') || (el as HTMLAnchorElement).href || null,
      cta_placement: attr(el, 'data-cta-placement') || attr(el, 'data-cta_placement') || null,
      cta_label: ctaLabel,
      page_path: location.pathname,
      page_title: document.title
    })

    // Meta Pixel: Track InitiateCheckout event
    if (window.fbq && price !== null) {
      window.fbq('track', 'InitiateCheckout', {
        value: price,
        currency: currency,
        content_name: ctaLabel,
        content_category: 'Plan Selection',
        content_ids: [planType || 'early_adopter'],
        content_type: 'product'
      })
    }
  }

  document.addEventListener('click', (e) => {
    const el = findTrackedTarget(e.target)
    if (!el) return

    const eventType = attr(el, 'data-event')

    if (eventType === 'cta_click') {
      handleCtaClick(el)
    } else if (eventType === 'select_plan') {
      handleSelectPlan(el)
    }

    // Optional navigation delay for same-tab links (to ensure dataLayer push completes)
    const isLink = el.tagName === 'A'
    const opensNew = attr(el, 'target') === '_blank'
    const href = isLink ? attr(el, 'href') : null
    if (isLink && href && !opensNew) {
      e.preventDefault()
      setTimeout(() => {
        window.location.href = href
      }, 150)
    }
  })

  // Keyboard accessibility (Enter/Space on focused tracked elements)
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return
    const el = document.activeElement as HTMLElement | null
    if (!el) return

    const eventType = attr(el, 'data-event')
    if (eventType === 'cta_click') {
      handleCtaClick(el)
    } else if (eventType === 'select_plan') {
      handleSelectPlan(el)
    }
  })
}

export {}
