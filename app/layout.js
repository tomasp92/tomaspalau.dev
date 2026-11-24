import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const display = Fraunces({ subsets: ['latin'], variable: '--font-display', axes: ['opsz'] })
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  metadataBase: new URL('https://tomaspalau.dev'),
  title: 'Tomás Palau Posse — Full Stack Engineer · Tech Lead',
  description:
    'Full Stack Engineer and Tech Lead based in Buenos Aires. React, TypeScript, GraphQL, Python/Django, Node.js, GCP and Terraform.',
  icons: { icon: '/images/foto-yo.png' },
  openGraph: {
    title: 'Tomás Palau Posse — Full Stack Engineer · Tech Lead',
    description: 'React, TypeScript, GraphQL, Python/Django, Node.js, GCP and Terraform.',
    url: 'https://tomaspalau.dev',
    images: ['/images/foto-yo.png'],
    type: 'profile',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f4ef' },
    { media: '(prefers-color-scheme: dark)', color: '#131312' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
