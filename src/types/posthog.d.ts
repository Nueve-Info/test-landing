export {}

declare global {
  interface Window {
    posthog?: {
      getFeatureFlag: (flag: string) => string | boolean | undefined
      onFeatureFlags: (callback: () => void) => void
    }
  }
}
