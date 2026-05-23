import { ArrowRight } from 'lucide-react'
import { WA_LINK } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#EEF0F8] to-[#F8F9FC] pt-24 pb-16 flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-[var(--secondary)] text-xs font-medium tracking-[0.25em] uppercase mb-5 border-b border-[var(--secondary)] pb-1">
            Advocacia Especializada · Belo Horizonte
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] text-[var(--foreground)] leading-tight mb-6">
            Seus direitos merecem uma defesa à altura.
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed mb-8 max-w-lg">
            Especialista em aposentadoria, juros abusivos e defesa criminal,
            Dr. Ângelo Máximo oferece atendimento personalizado para quem busca
            mais do que um advogado — busca um aliado.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-8 py-4 rounded text-base font-medium transition-colors duration-200"
          >
            Falar com Dr. Ângelo no WhatsApp
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="relative flex justify-center">
          <div className="w-full max-w-sm aspect-[3/4] rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[#4a5cb5] flex flex-col items-center justify-center overflow-hidden shadow-2xl">
            <span className="font-heading text-9xl font-bold text-white opacity-20 select-none">AM</span>
            <span className="text-white/50 text-xs tracking-[0.3em] uppercase mt-2">Foto do Dr. Ângelo</span>
          </div>
          <div className="absolute -bottom-4 -left-4 w-28 h-28 border-2 border-[var(--primary)] rounded-xl opacity-20 hidden md:block" />
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-[var(--primary)] rounded-full opacity-10 hidden md:block" />
        </div>
      </div>
    </section>
  )
}
