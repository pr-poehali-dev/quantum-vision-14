import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function LinkAccountsCard() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="card-military p-6 flex flex-col gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-3xl">
          📡
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#eef4ff] mb-2">Специальные сигналы</h3>
          <p className="text-sm text-[#eef4ff]/55 leading-relaxed">
            Сигналы управления и связи
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
            <DialogTitle className="text-[#d4af37] text-xl">📡 Специальные сигналы</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm text-[#eef4ff]/80 leading-relaxed">
            <div>
              <p className="text-[#d4af37] font-semibold mb-2">Сигналы управления</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span><span><span className="text-[#eef4ff] font-medium">Внимание / Слушай все</span> — один длинный сигнал сиреной.</span></li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span><span><span className="text-[#eef4ff] font-medium">Стой</span> — три коротких сигнала.</span></li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span><span><span className="text-[#eef4ff] font-medium">Опасность / Тревога</span> — непрерывный прерывистый сигнал.</span></li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span><span><span className="text-[#eef4ff] font-medium">Сбор группы</span> — два коротких, один длинный.</span></li>
              </ul>
            </div>
            <div className="border-t border-[#d4af37]/20 pt-3">
              <p className="text-[#d4af37] font-semibold mb-2">Световые сигналы</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span><span><span className="text-[#eef4ff] font-medium">Мигание фарами 2 раза</span> — пропустить / пройти.</span></li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span><span><span className="text-[#eef4ff] font-medium">Аварийная сигнализация</span> — остановка, требование к другим остановиться.</span></li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}