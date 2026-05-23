import { MapPin, Phone } from 'lucide-react'
import { WA_LINK, ADDRESS, BUSINESS_NAME } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--foreground)] text-white py-14">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-heading text-xl font-bold text-white tracking-wide">ÂNGELO MÁXIMO</p>
          <p className="text-xs text-white/50 tracking-[0.2em] uppercase mb-3">Advocacia</p>
          <p className="text-white/60 text-sm leading-relaxed">
            Direito com compromisso.<br />Advocacia com propósito.
          </p>
        </div>

        <div>
          <h3 className="text-xs text-white/40 tracking-[0.2em] uppercase mb-4">Áreas de atuação</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Direito Previdenciário</li>
            <li>Defesa do Consumidor</li>
            <li>Direito Criminal</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs text-white/40 tracking-[0.2em] uppercase mb-4">Contato</h3>
          <div className="space-y-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Phone size={14} />
              WhatsApp: (31) 98965-5048
            </a>
            <div className="flex items-start gap-2 text-sm text-white/70">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>{ADDRESS}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-10 mt-10 border-t border-white/10">
        <p className="text-white/30 text-xs text-center">
          © {year} {BUSINESS_NAME}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
