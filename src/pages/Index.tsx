import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"

const commanders = [
  { rank: "Начальник военной полиции", name: "Майор Феофилов А.С.", contact: "тел. 380-800" },
  { rank: "Зам. по БП", name: "Прапорщик Васильев Н.В.", contact: "тел. 826-755" },
  { rank: "Старший инструктор", name: "Сол М.Н.", contact: "тел. 888-566" },
  { rank: "Отдел кадров", name: "Прапорщик Макеева А.Д.", contact: "тел. 554-929" },
]

export default function Index() {
  return (
    <main className="min-h-screen" style={{ background: "linear-gradient(135deg, #1a2a3a 0%, #0f1a24 100%)" }}>
      <Header />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />

      {/* Блок командования */}
      <section className="px-4 md:px-8 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#eef4ff] mb-2 text-center">Командование и инструкторы</h2>
        <p className="text-[#d4af37]/60 text-sm text-center mb-8 uppercase tracking-widest">Личный состав</p>

        <div className="card-military overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#d4af37]/20">
                <th className="text-left px-6 py-4 text-[#d4af37]/70 font-medium uppercase tracking-wider text-xs">Должность</th>
                <th className="text-left px-6 py-4 text-[#d4af37]/70 font-medium uppercase tracking-wider text-xs">Имя</th>
                <th className="text-left px-6 py-4 text-[#d4af37]/70 font-medium uppercase tracking-wider text-xs">Контакт</th>
              </tr>
            </thead>
            <tbody>
              {commanders.map((c, i) => (
                <tr key={i} className="border-b border-[#d4af37]/10 hover:bg-[#d4af37]/5 transition-colors">
                  <td className="px-6 py-4 text-[#eef4ff]/70">{c.rank}</td>
                  <td className="px-6 py-4 text-[#eef4ff] font-medium">{c.name}</td>
                  <td className="px-6 py-4 text-[#d4af37]">{c.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-6 py-4 border-t border-[#d4af37]/20 flex items-center gap-2">
            <span className="text-lg">⚡</span>
            <span className="text-sm text-[#eef4ff]/60">Для срочных вопросов — командный канал связи <span className="text-[#d4af37] font-semibold">FIRE | Войсковая часть 20115</span></span>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center border-t border-[#d4af37]/15">
        <p className="text-sm text-[#eef4ff]/40">
          © 2025 Военная полиция фракции «Воинская часть» | Официальный портал для личного состава | Версия 1.11
        </p>
      </footer>
    </main>
  )
}