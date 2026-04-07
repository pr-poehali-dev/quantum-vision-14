const stats = [
  { value: "24/7", label: "Дежурство" },
  { value: "380-800", label: "Номер командира" },
  { value: "826-755", label: "Заместитель по БП" },
  { value: "1.11", label: "Версия портала" },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-8 md:gap-16 px-4 py-8 border-y border-[#d4af37]/15">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-1">
          <span className="text-2xl font-bold text-[#d4af37]">{stat.value}</span>
          <span className="text-xs text-[#eef4ff]/50 uppercase tracking-wider">{stat.label}</span>
        </div>
      ))}
    </section>
  )
}