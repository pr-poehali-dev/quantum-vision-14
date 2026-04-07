import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function PaymentRolesCard() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="card-military p-6 flex flex-col gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-3xl">
          🪖
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#eef4ff] mb-2">Схемы построения</h3>
          <p className="text-sm text-[#eef4ff]/55 leading-relaxed">
            Тактические порядки и построения
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
            <DialogTitle className="text-[#d4af37] text-xl">🪖 Схемы построения</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm text-[#eef4ff]/80 leading-relaxed">
            <div>
              <p className="text-[#d4af37] font-semibold mb-2">Линейный порядок</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Шеренга — личный состав выстраивается в одну линию плечом к плечу.</li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Применяется при построениях, смотрах и церемониях.</li>
              </ul>
            </div>
            <div className="border-t border-[#d4af37]/20 pt-3">
              <p className="text-[#d4af37] font-semibold mb-2">Колонный порядок</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Колонна по одному — движение гуськом, дистанция 1-2 шага.</li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Колонна по двое — стандартное движение в патруле.</li>
              </ul>
            </div>
            <div className="border-t border-[#d4af37]/20 pt-3">
              <p className="text-[#d4af37] font-semibold mb-2">Рассыпной строй</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Веер — рассредоточение по фронту для оцепления объекта.</li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Кольцо — полное окружение объекта или задержанного.</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}