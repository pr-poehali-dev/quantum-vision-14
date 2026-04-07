import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function SendFundsCard() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="card-military p-6 flex flex-col gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-3xl">
          🚨
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#eef4ff] mb-2">Правила использования СГУ</h3>
          <p className="text-sm text-[#eef4ff]/55 leading-relaxed">
            Спецсигналы: сирена и проблесковые маяки
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
            <DialogTitle className="text-[#d4af37] text-xl">🚨 Правила использования СГУ</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm text-[#eef4ff]/80 leading-relaxed">
            <div>
              <p className="text-[#d4af37] font-semibold mb-2">Когда разрешено включать СГУ</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>При преследовании нарушителя или подозреваемого.</li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>При экстренном выезде на место происшествия.</li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>При сопровождении задержанного в условиях угрозы.</li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>По приказу старшего наряда или командира.</li>
              </ul>
            </div>
            <div className="border-t border-[#d4af37]/20 pt-3">
              <p className="text-[#d4af37] font-semibold mb-2">Запрещено</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Использовать СГУ без служебной необходимости.</li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Включать сирену в жилых зонах в ночное время без основания.</li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Использовать для запугивания граждан.</li>
              </ul>
            </div>
            <div className="border-t border-[#d4af37]/20 pt-3">
              <p className="text-[#d4af37] font-semibold mb-2">Режимы СГУ</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span><span><span className="text-[#eef4ff] font-medium">Маяк без сирены</span> — сопровождение, обозначение присутствия.</span></li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span><span><span className="text-[#eef4ff] font-medium">Маяк + сирена</span> — экстренный режим, преследование.</span></li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}