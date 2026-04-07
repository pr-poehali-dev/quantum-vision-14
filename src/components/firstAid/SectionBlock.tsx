import { useState } from "react"
import Icon from "@/components/ui/icon"
import { Section } from "./types"
import { AccordionItem } from "./AccordionItem"

export function SectionBlock({ section }: { section: Section }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card-military overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#d4af37]/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{section.icon}</span>
          <span className="text-base font-semibold text-[#eef4ff]">{section.title}</span>
        </div>
        <Icon name={open ? "ChevronUp" : "ChevronDown"} size={18} className="text-[#d4af37] shrink-0" />
      </button>
      {open && (
        <div className="px-6 pb-5 space-y-2 border-t border-[#d4af37]/15 pt-4">
          {section.items.map((item, i) => (
            <AccordionItem key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
