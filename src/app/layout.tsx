import { Montserrat } from 'next/font/google'
import { data } from './data'
import '../assets/scss/globals.scss'
import 'animate.css';

const montserrat = Montserrat({
  variable: '--montserrat',
  subsets: ['latin']
})

export const metadata = {
  title: data.head.title,
  description: data.head.description,
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/icon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head />
      <body>{children}</body>
    </html>
  )
}
