import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function SendFundsCard() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="card-military p-6 flex flex-col gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-3xl">
          📞
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#eef4ff] mb-2">Контакты</h3>
          <p className="text-sm text-[#eef4ff]/55 leading-relaxed">
            Командование и инструкторы
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
            <DialogTitle className="text-[#d4af37] text-xl">📞 Контакты командования и экстренная связь</DialogTitle>
          </DialogHeader>
          <ul className="space-y-4 text-sm text-[#eef4ff]/80 leading-relaxed">
            {[
              { role: "Начальник военной полиции", name: "Майор Феофилов А.С.", phone: "тел. 380-800", vk: "https://vk.com/nulifaerxex" },
              { role: "Зам. по БП", name: "Прапорщик Васильев Н.В.", phone: "тел. 826-755", vk: "https://vk.com/kolian2931" },
              { role: "Старший инструктор", name: "Сол М.Н.", phone: "тел. 888-566", vk: "https://vk.com/nepupok" },
              { role: "Отдел кадров", name: "Прапорщик Макеева А.Д.", phone: "тел. 554-929", vk: "https://vk.com/alopes2" },
            ].map((c) => (
              <li key={c.name} className="flex gap-2">
                <span className="text-[#d4af37] mt-0.5">•</span>
                <span>
                  <span className="text-[#eef4ff] font-medium">{c.role}:</span> {c.name} — {c.phone}
                  {" · "}
                  <a href={c.vk} target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:underline">ВКонтакте</a>
                </span>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </>
  )
}