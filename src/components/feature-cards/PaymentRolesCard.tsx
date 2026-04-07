import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function PaymentRolesCard() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="card-military p-6 flex flex-col gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-3xl">
          ⭐
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#eef4ff] mb-2">Аттестация</h3>
          <p className="text-sm text-[#eef4ff]/55 leading-relaxed">
            Требования и порядок сдачи
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
            <DialogTitle className="text-[#d4af37] text-xl">🎖️ Аттестация — порядок и требования</DialogTitle>
          </DialogHeader>
          <ul className="space-y-3 text-sm text-[#eef4ff]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Этапы: теория (устав ВП), физическая подготовка (КФП), стрельбы, тактическая подготовка.</li>
            <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Расписание аттестации: 1-я и 3-я пятница месяца, 10:00, учебный корпус.</li>
            <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Допуск: по допуску врача и сдача зачётов по ОКП.</li>
            <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Срок действия аттестации — 1 год, после переаттестация.</li>
            <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Для сдачи необходимо предъявить жетон и форму одежды ВП.</li>
            <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span><span>Консультации с инструкторами по вторникам в <span className="text-[#d4af37] font-semibold">16:00</span>.</span></li>
          </ul>
        </DialogContent>
      </Dialog>
    </>
  )
}
