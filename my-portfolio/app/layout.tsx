import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}

