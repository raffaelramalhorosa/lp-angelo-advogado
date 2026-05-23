import { UserCheck, ShieldCheck, BadgePercent, Scale } from 'lucide-react'

const benefits = [
  {
    Icon: UserCheck,
    title: 'Atendimento 100% Personalizado',
    description: 'Cada caso é único. Você terá atenção exclusiva em todas as etapas do seu processo.',
  },
  {
    Icon: ShieldCheck,
    title: 'Expertise Previdenciária',
    description: 'Orientação completa para quem deseja se aposentar com segurança e receber o que é de direito.',
  },
  {
    Icon: BadgePercent,
    title: 'Combate a Juros Abusivos',
    description: 'Revisão de contratos e negociação com bancos para reduzir ou eliminar cobranças indevidas.',
  },
  {
    Icon: Scale,
    title: 'Defesa Criminal Sólida',
    description: 'Atuação estratégica em casos criminais, garantindo que seus direitos sejam respeitados.',
  },
]

export default function Beneficios() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs text-[var(--secondary)] tracking-[0.25em] uppercase font-medium">
            Por que nos escolher
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-[var(--foreground)] mt-3">
            Comprometimento em cada detalhe
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="p-6 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-[var(--accent)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] transition-colors duration-200">
                <Icon size={22} className="text-[var(--primary)] group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[var(--foreground)] mb-2">{title}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
