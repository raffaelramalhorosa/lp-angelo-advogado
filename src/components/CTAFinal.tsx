import { ArrowRight } from 'lucide-react'
import { WA_LINK } from '@/lib/constants'

export default function CTAFinal() {
  return (
    <section className="py-24 bg-[var(--primary)]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-white leading-tight mb-4">
          Não enfrente isso sozinho. Fale com quem entende.
        </h2>
        <p className="text-white/70 text-lg mb-10">
          Uma conversa pode mudar o rumo do seu caso. O primeiro contato é sem compromisso.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-[var(--primary)] hover:bg-[var(--accent)] px-10 py-4 rounded text-base font-semibold transition-colors duration-200"
        >
          Quero falar com Dr. Ângelo agora
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}
