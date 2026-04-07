export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-16 pb-10 text-center">
      <div className="mb-6 relative">
        <div className="absolute inset-0 rounded-full bg-[#d4af37]/10 blur-2xl scale-150"></div>
        <img
          src="https://cdn.poehali.dev/projects/24127d0a-2ecc-4750-a8e2-dd310649bbf8/bucket/c124b3d6-21a6-458f-8877-cc8b5aa4626a.jpg"
          alt="Эмблема Военной полиции"
          className="relative h-44 w-44 md:h-56 md:w-56 object-contain drop-shadow-2xl"
          style={{ filter: "drop-shadow(0 0 24px rgba(212,175,55,0.35))" }}
        />
      </div>

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