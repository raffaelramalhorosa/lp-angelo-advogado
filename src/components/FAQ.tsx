'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Quanto tempo leva para dar entrada na aposentadoria?',
    a: 'Depende do seu histórico contributivo e da modalidade de aposentadoria. Após análise do seu caso, Dr. Ângelo apresenta um prazo realista e cuida de todo o processo junto ao INSS.',
  },
  {
    q: 'Como sei se estou pagando juros abusivos?',
    a: 'Se os juros do seu contrato estão acima da taxa média do mercado ou se há cobranças que você não reconhece, há boa chance de abusividade. Uma consulta é o primeiro passo para descobrir.',
  },
  {
    q: 'Preciso ir ao escritório pessoalmente?',
    a: 'Não necessariamente. Muitos atendimentos podem ser feitos via WhatsApp ou videochamada. Mas se preferir, estamos na Av. Vilarinho, 1518, Sala 104 — Venda Nova, BH.',
  },
  {
    q: 'O escritório atende casos criminais de qualquer natureza?',
    a: 'Dr. Ângelo analisa cada situação individualmente antes de assumir um caso. Entre em contato para uma consulta inicial e avaliação gratuita da sua situação.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs text-[var(--secondary)] tracking-[0.25em] uppercase font-medium">
            Dúvidas frequentes
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-[var(--foreground)] mt-3">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="border border-[var(--border)] rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left text-[var(--foreground)] font-medium hover:bg-[var(--accent)] transition-colors duration-150"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="pr-4 text-sm md:text-base">{q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[var(--secondary)] transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-48' : 'max-h-0'}`}
              >
                <p className="px-6 pb-4 text-[var(--muted)] text-sm leading-relaxed">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
