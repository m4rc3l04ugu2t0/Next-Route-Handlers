import { type NextRequest } from 'next/server'
import { cookies, headers } from 'next/headers'

export async function GET(request: NextRequest) {
  const headersRequest = new Headers(request.headers)
  const headerListb = headers()
  const theme = request.cookies.get('theme')

  cookies().set('themeLight', 'light')

  console.log(headersRequest.get('Authorization'))
  console.log(headerListb.get('Authorization'))
  console.log(theme)
  console.log(cookies().get('themeLight'))

  return new Response('<h1>Data users</h1>', {
    headers: {
      'Content-Type': 'text/html',
      'Set-Cookie': 'theme=dark'
    }
  })
}
