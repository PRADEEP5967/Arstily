import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Artistly - Book Performing Artists',
  description: 'A platform for booking performing artists for your events',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}