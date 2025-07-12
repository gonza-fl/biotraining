import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bio Training',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <head>
        <link rel="icon" href="/images/bio-training-logo.png" />
      </head>
      <html lang="es">
        <body>{children}</body>
      </html>
    </>
  )
}
