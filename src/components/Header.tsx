import { Shield } from "lucide-react"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-[#d4af37]/20">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/40">
          <Shield className="h-5 w-5 text-[#d4af37]" />
        </div>
        <div>
          <span className="text-base font-bold text-[#eef4ff] tracking-wide">AMAZING FIRE</span>
          <p className="text-xs text-[#d4af37]/70 leading-none">Военная полиция</p>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#signals" className="text-sm text-[#eef4ff]/60 hover:text-[#d4af37] transition-colors">
          Специальные сигналы
        </a>
        <a href="#formations" className="text-sm text-[#eef4ff]/60 hover:text-[#d4af37] transition-colors">
          Схемы построения
        </a>
        <a href="#sgu" className="text-sm text-[#eef4ff]/60 hover:text-[#d4af37] transition-colors">
          Правила использования СГУ
        </a>
        <a href="#patrol" className="text-sm text-[#eef4ff]/60 hover:text-[#d4af37] transition-colors">
          Патрульная служба
        </a>
        <a href="#firstaid" className="text-sm text-[#eef4ff]/60 hover:text-[#d4af37] transition-colors">
          Первая доврачебная помощь
        </a>
      </nav>

      <div className="flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-1.5">
        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
        <span className="text-xs text-[#d4af37] font-medium">Фракция «Воинская часть»</span>
      </div>
    </header>
  )
}