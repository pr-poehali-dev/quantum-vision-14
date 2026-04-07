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
          <div className="space-y-4 text-sm text-[#eef4ff]/80 leading-relaxed">
            <div>
              <p className="text-[#d4af37] font-semibold mb-2">Правила прохождения</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Срок на сдачу: <span className="text-[#eef4ff] font-medium">5 дней</span>.</li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Допускается не более <span className="text-[#eef4ff] font-medium">5 ошибок</span> на все вопросы.</li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>При провале — <span className="text-[#eef4ff] font-medium">2 дня</span> на пересдачу.</li>
                <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>После второго провала — перевод в <span className="text-[#eef4ff] font-medium">РМТО/ДШР</span>.</li>
              </ul>
            </div>
            <div className="border-t border-[#d4af37]/20 pt-3">
              <p className="text-[#d4af37] font-semibold mb-2">Что входит в аттестацию</p>
              <ol className="space-y-2">
                {[
                  "Внутренний устав ВЧ",
                  "Устав ВП",
                  "ФЗ «О территориях с ограниченным доступом»",
                  "ФЗ «Об оружии»",
                  "ФЗ «О статусе военнослужащих и военной службе»",
                  "Уголовный кодекс",
                  "Федеральное постановление",
                  "Правила и процесс задержания",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#d4af37] font-medium min-w-[20px]">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
                <li className="flex gap-2">
                  <span className="text-[#d4af37] font-medium min-w-[20px]">9.</span>
                  <span>Проверка на знание приказов Генерала <span className="text-[#d4af37]/60 text-xs">(в разработке)</span></span>
                </li>
              </ol>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}