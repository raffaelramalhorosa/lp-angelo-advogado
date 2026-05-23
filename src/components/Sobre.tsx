import { MapPin } from 'lucide-react'
import { ADDRESS } from '@/lib/constants'

export default function Sobre() {
  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <div className="relative flex justify-center md:justify-start order-2 md:order-1">
          <div className="w-full max-w-sm aspect-square rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[#dce0f0] flex items-center justify-center shadow-inner">
            <span className="font-heading text-7xl font-bold text-[var(--primary)] opacity-20 select-none">AM</span>
          </div>
          <div className="absolute -bottom-3 -right-3 w-20 h-20 border-2 border-[var(--secondary)] rounded-xl opacity-30 hidden md:block" />
        </div>

        <div className="order-1 md:order-2">
          <span className="text-xs text-[var(--secondary)] tracking-[0.25em] uppercase font-medium">
            Quem somos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-[var(--foreground)] mt-3 mb-6">
            Sobre Dr. Ângelo Máximo
          </h2>

          <div className="space-y-4 text-[var(--muted)] leading-relaxed">
            <p>
              Mais do que um advogado, Dr. Ângelo Máximo é um profissional comprometido
              com pessoas que precisam de orientação jurídica clara e eficaz. Atua em
              Belo Horizonte com foco em Direito Previdenciário, Defesa do Consumidor
              e Direito Criminal, atendendo cada cliente como se fosse o único.
            </p>
            <p>
              Localizado na Avenida Vilarinho, no coração de Venda Nova, o escritório
              foi pensado para receber você em um ambiente acolhedor e confidencial.
              Aqui, você encontrará não apenas soluções jurídicas — encontrará alguém
              que realmente ouve.
            </p>
            <p>
              Se você está planejando a aposentadoria, sofrendo com cobranças abusivas
              ou enfrentando uma situação criminal delicada, Dr. Ângelo está pronto para
              orientar você com responsabilidade e dedicação.
            </p>
          </div>

          <div className="mt-8 flex items-start gap-3 p-4 rounded-lg bg-[var(--accent)] border border-[var(--border)]">
            <MapPin size={18} className="text-[var(--primary)] mt-0.5 shrink-0" />
            <span className="text-sm text-[var(--foreground)]">{ADDRESS}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
