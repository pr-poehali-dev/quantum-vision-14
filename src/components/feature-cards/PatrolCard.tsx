import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function PatrolCard() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="card-military p-6 flex flex-col gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-3xl">
          🛡️
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#eef4ff] mb-2">Патрульная служба</h3>
          <p className="text-sm text-[#eef4ff]/55 leading-relaxed">
            Порядок несения патрульной службы
          </p>
        </div>

        <Button
          onClick={() => setOpen(true)}
          className="mt-auto w-full bg-[#d4af37] text-[#0f1a24] font-semibold hover:bg-[#c9a227] gold-glow-hover transition-all"
        >
          Подробнее
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="card-military border-[#d4af37]/50 text-[#eef4ff] max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-[#d4af37] text-xl">🛡️ Патрульная служба</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm text-[#eef4ff]/80 leading-relaxed">
            <div>
              <p className="text-[#d4af37] font-semibold mb-2">Состав наряда</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Минимальный состав патруля — <span className="text-[#eef4ff] font-medium">2 человека</span>.</li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Старший наряда назначается командиром или старшим по званию.</li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Каждый сотрудник обязан иметь при себе удостоверение и экипировку.</li>
              </ul>
            </div>
            <div className="border-t border-[#d4af37]/20 pt-3">
              <p className="text-[#d4af37] font-semibold mb-2">Обязанности патруля</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Поддерживать общественный порядок на закреплённой территории.</li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Проверять документы при наличии оснований.</li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Доложить о происшествии командиру немедленно.</li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Не покидать район патрулирования без приказа.</li>
              </ul>
            </div>
            <div className="border-t border-[#d4af37]/20 pt-3">
              <p className="text-[#d4af37] font-semibold mb-2">Порядок доклада</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Доклад по смене: время, район, замечания, происшествия.</li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>При задержании — немедленный доклад старшему с указанием личности.</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
