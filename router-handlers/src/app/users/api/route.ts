import { type NextRequest } from 'next/server'
import { headers } from 'next/headers'

export async function GET(request: NextRequest) {
  const headersRequest = new Headers(request.headers)
  const headerListb = headers()

  console.log(headersRequest.get('Authorization'))
  console.log(headerListb.get('Authorization'))

  return new Response('<h1>Data users</h1>', {
    headers: {
      'Content-Type': 'text/html'
    }
  })
}
