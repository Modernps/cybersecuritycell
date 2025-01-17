import './globals.css'
import { Press_Start_2P, Roboto_Mono, Oswald, Fira_Code, Space_Mono, Source_Code_Pro, Anonymous_Pro } from 'next/font/google'
import { ClientWrapper } from '@/components/ClientWrapper'
import { ThemeProvider } from '@/lib/themeContext'

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start-2p',
  display: 'swap',
  preload: true,
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

const oswald = Oswald({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  display: 'swap',
})

const anonymousPro = Anonymous_Pro({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-anonymous-pro',
  display: 'swap',
})

export const metadata = {
  title: 'CyberShakti',
  description: 'Empowering Security, Enabling Trust',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" className={`${pressStart2P.variable} ${robotoMono.variable} ${oswald.variable} ${firaCode.variable} ${spaceMono.variable} ${sourceCodePro.variable} ${anonymousPro.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          as="style"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="CyberShakti - Empowering Security, Enabling Trust" />
      </head>
      <body className={`flex flex-col min-h-screen font-fira-code pt-24 bg-gradient-to-b from-background to-background-end transition-colors duration-300 ${pressStart2P.variable} ${robotoMono.variable} ${oswald.variable} ${firaCode.variable} ${spaceMono.variable} ${sourceCodePro.variable} ${anonymousPro.variable}`}>
        <ThemeProvider>
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}

