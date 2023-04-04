import { Montserrat } from 'next/font/google'
import '../assets/scss/globals.scss'
import 'animate.css';

const montserrat = Montserrat({
  variable: '--montserrat',
  subsets: ['latin']
})

export const metadata = {
  title: 'Peruffo Jiu-Jistsu',
  description: 'Aulas de Jiu-Jitsu em Florianópolis',
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
