import { SectionBlock } from "./firstAid/SectionBlock"
import { sections } from "./firstAid/firstAidData"

export function FirstAidSection() {
  return (
    <section id="firstaid" className="px-4 md:px-8 py-12 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-[#eef4ff] mb-2 text-center">Первая доврачебная помощь</h2>
      <p className="text-[#d4af37]/60 text-sm text-center mb-8 uppercase tracking-widest">Тактическая медицина</p>
      <div className="space-y-3">
        {sections.map((section) => (
          <SectionBlock key={section.id} section={section} />
        ))}
      </div>
    </section>
  )
}
