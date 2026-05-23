import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Roberto Almeida',
    context: 'Servidor público aposentado, Belo Horizonte',
    text: 'Tentei dar entrada na minha aposentadoria sozinho por meses e não conseguia. O Dr. Ângelo resolveu em poucas semanas. Atendimento impecável, me explicou tudo com paciência.',
  },
  {
    name: 'Márcia Ferreira',
    context: 'Consumidora, Venda Nova — BH',
    text: 'Tinha uma dívida com juros absurdos que parecia não ter fim. Com a ajuda do Dr. Ângelo consegui revisar o contrato e reduzir o valor pela metade. Me sinto no controle da minha vida financeira de novo.',
  },
  {
    name: 'Carlos Eduardo Souza',
    context: 'Empresário, Belo Horizonte',
    text: 'Passei por uma situação criminal muito difícil. A atuação do Dr. Ângelo foi estratégica e transparente. Sabia exatamente o que estava acontecendo em cada etapa. Profissional de verdade.',
  },
]

export default function Depoimentos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs text-[var(--secondary)] tracking-[0.25em] uppercase font-medium">
            Depoimentos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-[var(--foreground)] mt-3">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, context, text }) => (
            <div
              key={name}
              className="p-6 rounded-xl border border-[var(--border)] bg-[var(--background)] flex flex-col gap-4"
            >
              <Quote size={28} className="text-[var(--primary)] opacity-30" />
              <p className="text-[var(--muted)] text-sm leading-relaxed flex-1">{text}</p>
              <div>
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="font-semibold text-[var(--foreground)] text-sm">{name}</p>
                <p className="text-[var(--muted)] text-xs">{context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
