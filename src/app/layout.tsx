import type { Metadata } from 'next';
import { outfit, raleway } from './_ui/fonts';
import './_ui/token.css';
import './_ui/globals.css';
import { HeaderWrapper } from './_ui/components/Header/HeaderWrapper';
import { Footer } from './_ui/components/Footer/Footer';


export const metadata: Metadata = {
  title: 'Ofada Tech Nigeria',
  description: 'Nigeria leading technical school, Ogun, Lagos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${raleway.variable}`}>
        <HeaderWrapper />
        {children}
        <Footer />
      </body>
    </html>
  )
}
