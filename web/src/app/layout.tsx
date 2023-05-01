import './globals.css'
import { Roboto } from 'next/font/google'

const inter = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata = {
  title: 'Wellington Pinho',
  description: 'My personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}  className={inter.className}>{children}</body>
    </html>
  )
}
