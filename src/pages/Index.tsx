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

      {/* Блок полезных ссылок */}
      <section className="px-4 md:px-8 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#eef4ff] mb-2 text-center">Полезные ссылки</h2>
        <p className="text-[#d4af37]/60 text-sm text-center mb-8 uppercase tracking-widest">Актуальные ресурсы</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "Форум ВП", url: "https://forum.amazing-online.com/forums/voennaja-policija.1007/", icon: "🗂️" },
            { name: "Сайт военной полиции", url: "https://vk.cc/cwLwgZ", icon: "🌐" },
            { name: "Таблица военной полиции", url: "https://docs.google.com/spreadsheets/d/1VMvhiha8pNTcDB1beeQ9mKCHugGqm6g70Ls8LnKjxUk/edit?gid=0#gid=0", icon: "📊" },
            { name: "Таблица «Ревизии и поставки»", url: "https://vk.cc/cSJmXK", icon: "📋" },
            { name: "Запись на ревизию", url: "https://script.google.com/macros/s/AKfycbwdb4MV6V2CHnRSA190tCcwfXbqeJwZjQGOHdEOcw1t/dev", icon: "✍️" },
            { name: "Дискорд «Войсковая часть № 20115»", url: "https://vk.cc/cSJ2HP", icon: "💬" },
            { name: "Флудилка воинской части", url: "https://vk.cc/cSJ2Et", icon: "📢" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-military p-4 flex items-center gap-3 hover:bg-[#d4af37]/5 transition-colors group"
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="text-sm text-[#eef4ff]/80 group-hover:text-[#d4af37] transition-colors">{link.name}</span>
            </a>
          ))}
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