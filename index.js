import SvelteKit from './.cloudflare/worker.js'
import { Hono } from 'hono'
const app = new Hono()

app.get('/test', (c) => c.text('Hono!'))
app.mount('/svelte', SvelteKit.fetch)

export default app