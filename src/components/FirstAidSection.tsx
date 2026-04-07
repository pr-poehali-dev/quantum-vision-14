import { useState } from "react"
import Icon from "@/components/ui/icon"

type SubItem = {
  title: string
  content: React.ReactNode
}

type Section = {
  id: string
  title: string
  icon: string
  items: SubItem[]
}

const sections: Section[] = [
  {
    id: "tactical-medicine",
    title: "Тактическая медицина",
    icon: "🏥",
    items: [
      {
        title: "Что такое тактическая медицина",
        content: (
          <p>Тактическая медицина — раздел военной медицины, обеспечивающий оказание первой помощи в боевых и экстремальных условиях. Цель — сохранить жизнь до эвакуации в медпункт.</p>
        ),
      },
      {
        title: "Принцип MARCH",
        content: (
          <ul className="space-y-1">
            <li><span className="text-[#d4af37] font-semibold">M</span> — Massive bleeding (остановка массивных кровотечений)</li>
            <li><span className="text-[#d4af37] font-semibold">A</span> — Airway (обеспечение проходимости дыхательных путей)</li>
            <li><span className="text-[#d4af37] font-semibold">R</span> — Respiration (восстановление дыхания)</li>
            <li><span className="text-[#d4af37] font-semibold">C</span> — Circulation (поддержание кровообращения)</li>
            <li><span className="text-[#d4af37] font-semibold">H</span> — Hypothermia / Head injuries (переохлаждение, травмы головы)</li>
          </ul>
        ),
      },
      {
        title: "Фазы тактической медицины",
        content: (
          <ul className="space-y-1">
            <li><span className="text-[#d4af37] font-medium">Фаза 1 — под огнём:</span> устранить угрозу, наложить жгут, вынести пострадавшего.</li>
            <li><span className="text-[#d4af37] font-medium">Фаза 2 — в укрытии:</span> полноценный осмотр, перевязка, стабилизация.</li>
            <li><span className="text-[#d4af37] font-medium">Фаза 3 — эвакуация:</span> подготовка к транспортировке, мониторинг состояния.</li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "terminology",
    title: "Терминология ТМ",
    icon: "📖",
    items: [
      {
        title: "Основные термины",
        content: (
          <ul className="space-y-1">
            <li><span className="text-[#d4af37] font-medium">Жгут</span> — устройство для остановки артериального кровотечения путём сдавления конечности.</li>
            <li><span className="text-[#d4af37] font-medium">Гемостаз</span> — остановка кровотечения.</li>
            <li><span className="text-[#d4af37] font-medium">Эвакуация</span> — транспортировка пострадавшего в безопасное место или к медикам.</li>
            <li><span className="text-[#d4af37] font-medium">Сортировка (триаж)</span> — определение приоритета оказания помощи при массовых потерях.</li>
          </ul>
        ),
      },
      {
        title: "Цвета триажа",
        content: (
          <ul className="space-y-1">
            <li><span className="text-red-400 font-semibold">Красный</span> — требует немедленной помощи, жизнеугрожающее состояние.</li>
            <li><span className="text-yellow-400 font-semibold">Жёлтый</span> — может подождать, состояние стабильное.</li>
            <li><span className="text-green-400 font-semibold">Зелёный</span> — лёгкие повреждения, самостоятельно передвигается.</li>
            <li><span className="text-gray-400 font-semibold">Чёрный</span> — несовместимые с жизнью повреждения или гибель.</li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "basics",
    title: "Основные понятия",
    icon: "📋",
    items: [
      {
        title: "Оценка обстановки",
        content: (
          <p>Прежде чем оказывать помощь — убедись в собственной безопасности. Осмотрись: угроза обстрела, задымление, повреждённые конструкции. Только после устранения угрозы — переходи к пострадавшему.</p>
        ),
      },
      {
        title: "Алгоритм первичного осмотра",
        content: (
          <ol className="space-y-1 list-decimal list-inside">
            <li>Проверь сознание (окликни, потряси за плечи).</li>
            <li>Проверь дыхание (10 секунд, визуально и на слух).</li>
            <li>Осмотри на кровотечения с головы до ног.</li>
            <li>Проверь пульс (сонная или лучевая артерия).</li>
            <li>Определи дальнейшие действия: эвакуация или оказание помощи на месте.</li>
          </ol>
        ),
      },
      {
        title: "Позиция восстановления",
        content: (
          <p>Если пострадавший без сознания, но дышит — уложи его на бок (стабильное боковое положение). Это предотвращает аспирацию рвотных масс и западание языка.</p>
        ),
      },
    ],
  },
  {
    id: "bandages",
    title: "Повязки",
    icon: "🩹",
    items: [
      {
        title: "Виды повязок",
        content: (
          <ul className="space-y-1">
            <li><span className="text-[#d4af37] font-medium">Давящая</span> — для остановки венозного кровотечения. Несколько слоёв бинта с давлением.</li>
            <li><span className="text-[#d4af37] font-medium">Окклюзионная</span> — герметизация проникающего ранения грудной клетки.</li>
            <li><span className="text-[#d4af37] font-medium">Иммобилизирующая</span> — фиксация конечности при переломе.</li>
            <li><span className="text-[#d4af37] font-medium">Кольцевая</span> — для небольших ран, простое перекрытие.</li>
          </ul>
        ),
      },
      {
        title: "Правила наложения повязки",
        content: (
          <ol className="space-y-1 list-decimal list-inside">
            <li>Промой рану чистой водой (если есть возможность).</li>
            <li>Накрой рану стерильным материалом.</li>
            <li>Забинтуй плотно, но не пережимай сосуды.</li>
            <li>Зафиксируй конец бинта булавкой или пластырем.</li>
            <li>Отметь время наложения.</li>
          </ol>
        ),
      },
      {
        title: "Жгут — правила наложения",
        content: (
          <ul className="space-y-1">
            <li>Накладывается выше раны на 5–7 см.</li>
            <li>Затягивается до остановки кровотечения.</li>
            <li><span className="text-red-400 font-semibold">Обязательно</span> записать время наложения (маркером на коже или бумаге).</li>
            <li>Максимальное время: 2 часа летом, 1 час зимой.</li>
            <li>Жгут не накрывать одеждой — он должен быть виден.</li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "transport",
    title: "Общие правила транспортировки",
    icon: "🚑",
    items: [
      {
        title: "Способы переноски",
        content: (
          <ul className="space-y-1">
            <li><span className="text-[#d4af37] font-medium">На руках</span> — при коротких дистанциях и отсутствии переломов позвоночника.</li>
            <li><span className="text-[#d4af37] font-medium">На носилках</span> — основной способ, несут 2–4 человека.</li>
            <li><span className="text-[#d4af37] font-medium">Волоком</span> — при угрозе жизни и отсутствии других возможностей.</li>
            <li><span className="text-[#d4af37] font-medium">На спине (пожарный захват)</span> — переноска одним бойцом.</li>
          </ul>
        ),
      },
      {
        title: "Запрещено при транспортировке",
        content: (
          <ul className="space-y-1">
            <li>Сгибать позвоночник при подозрении на его травму.</li>
            <li>Класть пострадавшего на повреждённую сторону без необходимости.</li>
            <li>Транспортировать без фиксации переломов.</li>
            <li>Оставлять пострадавшего без контроля дыхания.</li>
          </ul>
        ),
      },
      {
        title: "Положение при транспортировке",
        content: (
          <ul className="space-y-1">
            <li><span className="text-[#d4af37] font-medium">Без сознания</span> — на боку (восстановительное положение).</li>
            <li><span className="text-[#d4af37] font-medium">Травма позвоночника</span> — строго горизонтально, не поворачивать.</li>
            <li><span className="text-[#d4af37] font-medium">Ранение грудной клетки</span> — полусидячее положение.</li>
            <li><span className="text-[#d4af37] font-medium">Переломы конечностей</span> — зафиксировать шиной перед транспортировкой.</li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "trauma-types",
    title: "Виды травм",
    icon: "⚕️",
    items: [
      {
        title: "Огнестрельное ранение",
        content: (
          <ul className="space-y-1">
            <li>Наложи жгут при кровотечении из конечности.</li>
            <li>При ранении грудной клетки — окклюзионная повязка.</li>
            <li>Не извлекать инородные предметы из раны.</li>
            <li>Мониторить дыхание и сознание каждые 2 минуты.</li>
          </ul>
        ),
      },
      {
        title: "Термические ожоги",
        content: (
          <ul className="space-y-1">
            <li>Охладить место ожога холодной водой 10–20 минут.</li>
            <li>Не вскрывать пузыри, не наносить масло или крем.</li>
            <li>Накрыть стерильной повязкой.</li>
            <li>При обширных ожогах — немедленная эвакуация.</li>
          </ul>
        ),
      },
      {
        title: "Переломы",
        content: (
          <ul className="space-y-1">
            <li>Зафиксировать конечность шиной (доска, палка, скатка).</li>
            <li>Шина захватывает два сустава — выше и ниже перелома.</li>
            <li>При открытом переломе — сначала повязка на рану, затем шина.</li>
            <li>Не вправлять кость самостоятельно.</li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "mechanical",
    title: "Механические",
    icon: "🩻",
    items: [
      {
        title: "Контузия, кома",
        content: (
          <div className="space-y-2">
            <p><span className="text-[#d4af37] font-semibold">Контузия</span> — поражение от взрывной волны без видимых ранений. Симптомы: оглушение, потеря слуха, дезориентация, потеря сознания.</p>
            <p className="text-[#d4af37] font-medium mt-2">Первая помощь при контузии:</p>
            <ul className="space-y-1">
              <li>Вынести из зоны взрыва, уложить на бок.</li>
              <li>Расстегнуть воротник, обеспечить свежий воздух.</li>
              <li>Не давать воду при потере сознания.</li>
              <li>Контролировать дыхание, вызвать медиков.</li>
            </ul>
            <p><span className="text-[#d4af37] font-semibold">Кома</span> — глубокое нарушение сознания. Уложить в восстановительное положение на бок, контролировать дыхание, немедленная эвакуация.</p>
          </div>
        ),
      },
      {
        title: "Раны, кровотечения",
        content: (
          <div className="space-y-2">
            <p><span className="text-[#d4af37] font-medium">Виды кровотечений:</span></p>
            <ul className="space-y-1">
              <li><span className="text-red-400 font-semibold">Артериальное</span> — алая кровь бьёт пульсирующей струёй. Жгут выше раны.</li>
              <li><span className="text-orange-400 font-semibold">Венозное</span> — тёмная кровь течёт ровно. Давящая повязка.</li>
              <li><span className="text-yellow-400 font-semibold">Капиллярное</span> — кровь сочится равномерно. Чистая повязка.</li>
            </ul>
            <p className="text-[#d4af37] font-medium mt-2">Первая помощь:</p>
            <ul className="space-y-1">
              <li>Прижать рану рукой (в перчатке) и держать.</li>
              <li>Наложить давящую повязку или жгут.</li>
              <li>Поднять конечность выше уровня сердца.</li>
              <li>Эвакуировать в медпункт.</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Вывихи и растяжения",
        content: (
          <ul className="space-y-1">
            <li>Зафиксировать сустав в том положении, в котором он есть.</li>
            <li>Приложить холод через ткань на 15–20 минут.</li>
            <li>Не пытаться вправить вывих самостоятельно.</li>
            <li>Эластичная повязка при растяжении.</li>
          </ul>
        ),
      },
      {
        title: "Черепно-мозговая травма (ЧМТ)",
        content: (
          <div className="space-y-2">
            <p>Признаки: потеря сознания, рвота, неравномерные зрачки, кровь из ушей/носа.</p>
            <ul className="space-y-1">
              <li>Уложить на бок, зафиксировать голову.</li>
              <li>Не давать ничего есть и пить.</li>
              <li>Не оставлять одного.</li>
              <li>Немедленная эвакуация к медикам.</li>
            </ul>
          </div>
        ),
      },
    ],
  },
]

function AccordionItem({ item }: { item: SubItem }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#d4af37]/15 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium text-[#eef4ff] hover:bg-[#d4af37]/5 transition-colors"
      >
        <span>{item.title}</span>
        <Icon name={open ? "ChevronUp" : "ChevronDown"} size={16} className="text-[#d4af37] shrink-0 ml-2" />
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-[#eef4ff]/75 leading-relaxed border-t border-[#d4af37]/10 pt-3">
          {item.content}
        </div>
      )}
    </div>
  )
}

function SectionBlock({ section }: { section: Section }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card-military overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#d4af37]/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{section.icon}</span>
          <span className="text-base font-semibold text-[#eef4ff]">{section.title}</span>
        </div>
        <Icon name={open ? "ChevronUp" : "ChevronDown"} size={18} className="text-[#d4af37] shrink-0" />
      </button>
      {open && (
        <div className="px-6 pb-5 space-y-2 border-t border-[#d4af37]/15 pt-4">
          {section.items.map((item, i) => (
            <AccordionItem key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export function FirstAidSection() {
  return (
    <section id="firstaid" className="px-4 md:px-8 py-12 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-[#eef4ff] mb-2 text-center">Первая доврачебная помощь</h2>
      <p className="text-[#d4af37]/60 text-sm text-center mb-8 uppercase tracking-widest">Тактическая медицина</p>
      <div className="space-y-3">
        {sections.map((section) => (
          <SectionBlock key={section.id} section={section} />
        ))}
      </div>
    </section>
  )
}
