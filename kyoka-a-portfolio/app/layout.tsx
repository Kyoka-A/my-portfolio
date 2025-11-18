import './globals.css'
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'My Portfolio',
  description: 'Creative Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: any
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

