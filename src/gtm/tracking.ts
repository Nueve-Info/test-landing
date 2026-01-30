/**
 * GTM DataLayer tracking module
 * Installs a single global click/keyboard listener that pushes events
 * to window.dataLayer based on data-event attributes.
 */

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    __gtmTrackingInstalled?: boolean
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
    push({
      event: 'cta_click',
      cta_type: attr(el, 'data-cta-type') || attr(el, 'data-cta_type') || 'unknown',
      cta_placement: attr(el, 'data-cta-placement') || attr(el, 'data-cta_placement') || attr(el, 'data-cta_location') || 'unknown',
      cta_label: (el.innerText && el.innerText.trim()) || attr(el, 'aria-label') || 'cta',
      cta_href: (el as HTMLAnchorElement).href || attr(el, 'href') || null,
      page_path: location.pathname,
      page_title: document.title
    })
  }

  function handleBeginCheckout(el: HTMLElement) {
    const priceStr = attr(el, 'data-price')
    push({
      event: 'begin_checkout',
      plan_type: attr(el, 'data-plan-type') || attr(el, 'data-plan_type') || null,
      billing: attr(el, 'data-billing') || null,
      price: priceStr ? Number(priceStr) : null,
      currency: attr(el, 'data-currency') || 'USD',
      stripe_url: attr(el, 'data-stripe-url') || attr(el, 'data-stripe_url') || (el as HTMLAnchorElement).href || null,
      cta_placement: attr(el, 'data-cta-placement') || attr(el, 'data-cta_placement') || null,
      cta_label: (el.innerText && el.innerText.trim()) || attr(el, 'aria-label') || 'checkout',
      page_path: location.pathname,
      page_title: document.title
    })
  }

  document.addEventListener('click', (e) => {
    const el = findTrackedTarget(e.target)
    if (!el) return

    const eventType = attr(el, 'data-event')

    if (eventType === 'cta_click') {
      handleCtaClick(el)
    } else if (eventType === 'begin_checkout') {
      handleBeginCheckout(el)
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
    } else if (eventType === 'begin_checkout') {
      handleBeginCheckout(el)
    }
  })
}

export {}
