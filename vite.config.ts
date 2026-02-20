import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import type { IncomingMessage, ServerResponse } from 'node:http'

/**
 * Vite plugin that handles /api/create-checkout-session in dev mode
 * so `npm run dev` works without `vercel dev`.
 */
function stripeApiPlugin(allEnv: Record<string, string>): Plugin {
  return {
    name: 'stripe-checkout-api',
    configureServer(server) {
      server.middlewares.use(
        '/api/create-checkout-session',
        async (req: IncomingMessage, res: ServerResponse) => {
          res.setHeader('Content-Type', 'application/json')
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

          if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return }
          if (req.method !== 'POST') {
            res.writeHead(405); res.end(JSON.stringify({ error: 'Method not allowed' })); return
          }

          const body: Record<string, unknown> = await new Promise((resolve, reject) => {
            let data = ''
            req.on('data', (c: Buffer) => (data += c.toString()))
            req.on('end', () => { try { resolve(JSON.parse(data)) } catch (e) { reject(e) } })
          })

          const secretKey = allEnv.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY
          if (!secretKey) {
            res.writeHead(500)
            res.end(JSON.stringify({ error: 'STRIPE_SECRET_KEY is not set in .env.local' }))
            return
          }

          const priceId = body.priceId
          if (typeof priceId !== 'string' || !priceId.startsWith('price_')) {
            res.writeHead(400); res.end(JSON.stringify({ error: 'Invalid priceId' })); return
          }

          try {
            const Stripe = (await import('stripe')).default
            const stripe = new Stripe(secretKey)
            const siteUrl = allEnv.SITE_URL || process.env.SITE_URL || 'http://localhost:5174'

            const session = await stripe.checkout.sessions.create({
              ui_mode: 'embedded',
              mode: 'payment',
              line_items: [{ price: priceId, quantity: 1 }],
              return_url: `${siteUrl}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
              metadata: {
                ab_experiment: typeof body.ab_experiment === 'string' ? body.ab_experiment : 'none',
                ab_variant: typeof body.ab_variant === 'string' ? body.ab_variant : 'control',
              },
            })

            res.writeHead(200)
            res.end(JSON.stringify({ clientSecret: session.client_secret }))
          } catch (err) {
            const message = err instanceof Error ? err.message : 'Stripe error'
            console.error('[vite-stripe-api]', err)
            res.writeHead(500)
            res.end(JSON.stringify({ error: message }))
          }
        },
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const allEnv = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), tailwindcss(), stripeApiPlugin(allEnv)],
  }
})
