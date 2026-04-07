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
          <ul className="space-y-3 text-sm text-[#eef4ff]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span><span><span className="text-[#eef4ff] font-medium">Начальник военной полиции:</span> полковник Баранов С.В. — каб. 210, рация 112.3, внутр. 2101.</span></li>
            <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span><span><span className="text-[#eef4ff] font-medium">Оперативный дежурный:</span> рация 101, тел. 8(495)555-8723.</span></li>
            <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span><span><span className="text-[#eef4ff] font-medium">Инструкторский состав:</span> старший инструктор Воронин И.И. — рация 140.6.</span></li>
            <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span><span><span className="text-[#eef4ff] font-medium">Отдел кадров:</span> подполковник Соболев А.Д., часы приёма: чт 10–13.</span></li>
            <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span><span><span className="text-[#eef4ff] font-medium">Горячая линия доверия:</span> 8-800-555-ВПЧ (анонимно).</span></li>
            <li className="flex gap-2"><span className="text-[#d4af37] mt-0.5">•</span><span><span className="text-[#eef4ff] font-medium">Официальный канал:</span> <span className="text-[#d4af37] font-semibold">@milpol_voinskaya_chast</span></span></li>
          </ul>
        </DialogContent>
      </Dialog>
    </>
  )
}
