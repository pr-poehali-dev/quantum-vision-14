export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-16 pb-10 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 py-2 px-4">
        <span className="h-2 w-2 rounded-full bg-[#d4af37]"></span>
        <span className="text-sm font-medium text-[#d4af37]">Официальный портал для личного состава</span>
      </div>

      <h1 className="mb-3 max-w-3xl text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#eef4ff]">
        AMAZING FIRE
      </h1>

      <p className="mb-2 text-lg font-medium text-[#d4af37]">
        Военная полиция — фракция «Воинская часть»
      </p>

      <p className="mt-6 max-w-xl text-[#eef4ff]/60 leading-relaxed">
        Добро пожаловать на сайт Военной полиции фракции Воинская часть.<br />
        Официальный ресурс для курсантов и сотрудников. Здесь вы найдёте всю необходимую информацию о ревизиях, аттестации и контактах командования.
      </p>

      <div className="mt-8 flex items-center gap-3 rounded-2xl border border-[#d4af37]/20 bg-[#0f1a24]/80 px-6 py-3">
        <span className="text-2xl">⚡</span>
        <span className="text-sm text-[#eef4ff]/70">Командный канал связи: <span className="text-[#d4af37] font-semibold">«Форпост»</span></span>
      </div>
    </section>
  )
}
