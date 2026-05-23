import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' })
const playfair = Playfair_Display({ variable: '--font-playfair', subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Ângelo Máximo Advogado | Aposentadoria, Juros Abusivos e Defesa Criminal em BH',
  description: 'Especialista em aposentadoria, juros abusivos e defesa criminal. Atendimento personalizado em Belo Horizonte. Fale agora pelo WhatsApp.',
  openGraph: {
    title: 'Ângelo Máximo Advogado',
    description: 'Seus direitos merecem uma defesa à altura. Atendimento personalizado em BH.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
