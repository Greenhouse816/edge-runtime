import { fetch, Headers, Request } from '../fetch'

test('combine with fetch', async () => {
  const request = new Request('https://example.vercel.sh')
  const response = await fetch(request)
  const body = await response.text()
  expect(typeof body === 'string').toBe(true)
})

test('combine with Headers', async () => {
  const headers = new Headers({ cookie: 'hello=world' })
  const request = new Request('https://example.vercel.sh', {
    headers,
  })
  expect(request.headers.get('cookie')).toBe('hello=world')
})
