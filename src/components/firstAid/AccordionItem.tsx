import { useState } from "react"
import Icon from "@/components/ui/icon"
import { SubItem } from "./types"

export function AccordionItem({ item }: { item: SubItem }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#d4af37]/15 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium text-[#eef4ff] hover:bg-[#d4af37]/5 transition-colors"
      >
        <span>{item.title}</span>
        <Icon name={open ? "ChevronUp" : "ChevronDown"} size={16} className="text-[#d4af37] shrink-0 ml-2" />
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-[#eef4ff]/75 leading-relaxed border-t border-[#d4af37]/10 pt-3">
          {item.content}
        </div>
      )}
    </div>
  )
}
