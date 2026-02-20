export {}

declare global {
  interface Window {
    posthog?: {
      capture: (event: string, properties?: Record<string, unknown>) => void
      getFeatureFlag: (flag: string) => string | boolean | undefined
      onFeatureFlags: (callback: () => void) => void
    }
  }
}
