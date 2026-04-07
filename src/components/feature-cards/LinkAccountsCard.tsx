import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function LinkAccountsCard() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="card-military p-6 flex flex-col gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-3xl">
          📋
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#eef4ff] mb-2">Ревизии</h3>
          <p className="text-sm text-[#eef4ff]/55 leading-relaxed">
            Расписание и инструкции по проведению
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
            <DialogTitle className="text-[#d4af37] text-xl">📑 Ревизии — полная информация</DialogTitle>
          </DialogHeader>
          <ul className="space-y-3 text-sm text-[#eef4ff]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Плановые ревизии: каждый вторник и четверг с 09:00 до 12:00.</li>
            <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Внеплановые: по приказу командования.</li>
            <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Проверке подлежат: оружейная комната, документация, технические средства, вещевое имущество.</li>
            <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>Инструкции по проведению ревизии доступны в кабинете №105 у старшины.</li>
            <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span>По итогам ревизии составляется акт и отправляется в штаб.</li>
            <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span><span>Следующая общая ревизия — <span className="text-[#d4af37] font-semibold">15.11.2025</span>, явка обязательна.</span></li>
          </ul>
        </DialogContent>
      </Dialog>
    </>
  )
}
