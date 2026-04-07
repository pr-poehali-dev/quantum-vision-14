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
    id: "patrol-basics",
    title: "Патрульная служба",
    icon: "🛡️",
    items: [
      {
        title: "Состав и организация наряда",
        content: (
          <ul className="space-y-1">
            <li>Минимальный состав патруля — <span className="text-[#d4af37] font-medium">2 человека</span>.</li>
            <li>Старший наряда назначается командиром или старшим по званию в группе.</li>
            <li>Каждый сотрудник обязан иметь при себе удостоверение, табельное оружие и снаряжение.</li>
            <li>Перед выходом — обязательный инструктаж у командира: район, задачи, время смены.</li>
            <li>Связь с дежурным поддерживается не реже чем раз в 30 минут.</li>
          </ul>
        ),
      },
      {
        title: "Обязанности патруля",
        content: (
          <ul className="space-y-1">
            <li>Поддерживать общественный порядок на закреплённой территории.</li>
            <li>Проверять документы при наличии оснований для подозрений.</li>
            <li>Пресекать правонарушения, при необходимости — задерживать.</li>
            <li>Не покидать район патрулирования без приказа старшего.</li>
            <li>Немедленно докладывать о происшествиях командиру.</li>
            <li>Оказывать первую помощь пострадавшим до прибытия медиков.</li>
          </ul>
        ),
      },
      {
        title: "Порядок доклада",
        content: (
          <ul className="space-y-1">
            <li><span className="text-[#d4af37] font-medium">Доклад по смене:</span> время, район, замечания, происшествия.</li>
            <li><span className="text-[#d4af37] font-medium">При задержании:</span> немедленный доклад старшему с указанием личности и основания.</li>
            <li><span className="text-[#d4af37] font-medium">При ЧП:</span> доклад дежурному, место, число пострадавших, запрошенная помощь.</li>
            <li>Доклад ведётся чётко, без лишних слов: кто — где — что — что нужно.</li>
          </ul>
        ),
      },
      {
        title: "Проверка документов",
        content: (
          <ul className="space-y-1">
            <li>Основания для проверки: подозрение в совершении правонарушения, нахождение на режимной территории, ориентировка.</li>
            <li>Сотрудник обязан представиться и назвать причину проверки.</li>
            <li>Документы принимаются в руки только с согласия владельца либо при задержании.</li>
            <li>При отказе предъявить документы — составить рапорт и доложить командиру.</li>
          </ul>
        ),
      },
      {
        title: "Применение физической силы и оружия",
        content: (
          <div className="space-y-2">
            <p className="text-[#d4af37] font-medium">Физическая сила применяется:</p>
            <ul className="space-y-1">
              <li>При активном сопротивлении задержанию.</li>
              <li>При нападении на сотрудника или гражданских лиц.</li>
            </ul>
            <p className="text-[#d4af37] font-medium mt-2">Оружие применяется:</p>
            <ul className="space-y-1">
              <li>При угрозе жизни сотрудника или третьих лиц.</li>
              <li>При вооружённом нападении или побеге вооружённого преступника.</li>
              <li><span className="text-red-400 font-semibold">Запрещено</span> применять оружие в толпе, против невооружённых при иных возможностях.</li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    id: "special-signals",
    title: "Специальные сигналы",
    icon: "📡",
    items: [
      {
        title: "Сигналы управления (звуковые)",
        content: (
          <ul className="space-y-1">
            <li><span className="text-[#d4af37] font-medium">Внимание / Слушай все</span> — один длинный сигнал сиреной или свистком.</li>
            <li><span className="text-[#d4af37] font-medium">Стой / Отбой движения</span> — три коротких сигнала.</li>
            <li><span className="text-[#d4af37] font-medium">Опасность / Тревога</span> — непрерывный прерывистый сигнал (пилот).</li>
            <li><span className="text-[#d4af37] font-medium">Сбор группы</span> — два коротких, один длинный.</li>
            <li><span className="text-[#d4af37] font-medium">Огонь / Открыть огонь</span> — один короткий сигнал (по команде старшего).</li>
            <li><span className="text-[#d4af37] font-medium">Прекратить огонь</span> — два длинных сигнала.</li>
          </ul>
        ),
      },
      {
        title: "Световые сигналы",
        content: (
          <ul className="space-y-1">
            <li><span className="text-[#d4af37] font-medium">Мигание фарами 1 раз</span> — приветствие / подтверждение.</li>
            <li><span className="text-[#d4af37] font-medium">Мигание фарами 2 раза</span> — пропустить / разрешение проезда.</li>
            <li><span className="text-[#d4af37] font-medium">Мигание фарами 3 раза</span> — требование остановиться.</li>
            <li><span className="text-[#d4af37] font-medium">Аварийная сигнализация</span> — полная остановка, чрезвычайная ситуация.</li>
            <li><span className="text-[#d4af37] font-medium">Дальний свет</span> — предупреждение об опасности на дороге.</li>
          </ul>
        ),
      },
      {
        title: "Ручные сигналы (жесты)",
        content: (
          <ul className="space-y-1">
            <li><span className="text-[#d4af37] font-medium">Рука вверх (ладонь вперёд)</span> — стой.</li>
            <li><span className="text-[#d4af37] font-medium">Круговое движение рукой над головой</span> — сбор, ко мне.</li>
            <li><span className="text-[#d4af37] font-medium">Рука в сторону движения</span> — вперёд / в указанном направлении.</li>
            <li><span className="text-[#d4af37] font-medium">Рука горизонтально вниз</span> — лечь / укрыться.</li>
            <li><span className="text-[#d4af37] font-medium">Два пальца к глазам</span> — наблюдение, внимание на объект.</li>
            <li><span className="text-[#d4af37] font-medium">Сжатый кулак</span> — стоп, замереть на месте.</li>
          </ul>
        ),
      },
      {
        title: "Радиосигналы и позывные",
        content: (
          <ul className="space-y-1">
            <li><span className="text-[#d4af37] font-medium">Приём</span> — конец фразы, жду ответа.</li>
            <li><span className="text-[#d4af37] font-medium">Понял</span> — подтверждение получения команды.</li>
            <li><span className="text-[#d4af37] font-medium">Повтори</span> — не понял, прошу повторить.</li>
            <li><span className="text-[#d4af37] font-medium">Конец связи</span> — завершение сеанса.</li>
            <li>Позывные используются вместо имён и должностей в эфире.</li>
            <li>Категорически запрещено называть реальные данные в открытом эфире.</li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "formations",
    title: "Схемы построения",
    icon: "🪖",
    items: [
      {
        title: "Линейный порядок (шеренга)",
        content: (
          <ul className="space-y-1">
            <li>Личный состав выстраивается в одну линию плечом к плечу.</li>
            <li>Применяется при торжественных построениях, смотрах и инструктажах.</li>
            <li>Дистанция между бойцами — вытянутая рука.</li>
            <li>Старший — правый фланг или центр (по обстановке).</li>
          </ul>
        ),
      },
      {
        title: "Колонный порядок",
        content: (
          <ul className="space-y-1">
            <li><span className="text-[#d4af37] font-medium">Колонна по одному</span> — движение гуськом, дистанция 1–2 шага. При узких проходах, коридорах.</li>
            <li><span className="text-[#d4af37] font-medium">Колонна по двое</span> — стандартное передвижение в патруле по улице.</li>
            <li><span className="text-[#d4af37] font-medium">Колонна по четыре</span> — парадный строй, марш на открытой местности.</li>
            <li>Дистанция в движении — один шаг, на месте — по команде.</li>
          </ul>
        ),
      },
      {
        title: "Клин",
        content: (
          <ul className="space-y-1">
            <li>Командир — в вершине, бойцы расходятся назад под углом.</li>
            <li>Применяется при движении в потенциально опасной зоне.</li>
            <li>Обеспечивает широкий сектор наблюдения и огня по флангам.</li>
            <li>Ведомые держат в поле зрения командира и фланги.</li>
          </ul>
        ),
      },
      {
        title: "Цепь (рассыпной строй)",
        content: (
          <ul className="space-y-1">
            <li>Бойцы выстраиваются в линию с увеличенными интервалами (3–5 м).</li>
            <li>Используется при прочёсывании местности, оцеплении объекта.</li>
            <li><span className="text-[#d4af37] font-medium">Веер</span> — рассредоточение от центра к флангам для оцепления.</li>
            <li><span className="text-[#d4af37] font-medium">Кольцо</span> — полное окружение объекта или задержанного.</li>
          </ul>
        ),
      },
      {
        title: "Уступ и колонна зигзагом",
        content: (
          <ul className="space-y-1">
            <li><span className="text-[#d4af37] font-medium">Уступ</span> — каждый следующий боец смещён на шаг в сторону и назад. Минимизирует потери от фронтального огня.</li>
            <li><span className="text-[#d4af37] font-medium">Зигзаг</span> — бойцы по очереди смещаются то влево, то вправо относительно оси движения.</li>
            <li>Оба строя применяются при движении под возможным обстрелом.</li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "sgu",
    title: "Правила использования СГУ",
    icon: "🚨",
    items: [
      {
        title: "Что такое СГУ",
        content: (
          <p>СГУ (Специальные Громкоговорящие Устройства) — световые и звуковые устройства на служебных транспортных средствах: проблесковые маяки (мигалки) и сирена. Предназначены для обозначения экстренного движения и управления транспортными потоками.</p>
        ),
      },
      {
        title: "Когда разрешено включать СГУ",
        content: (
          <ul className="space-y-1">
            <li>При преследовании нарушителя или подозреваемого.</li>
            <li>При экстренном выезде на место происшествия.</li>
            <li>При сопровождении задержанного в условиях оперативной необходимости.</li>
            <li>При оцеплении и разгоне несанкционированных скоплений.</li>
            <li>По приказу старшего наряда или командира.</li>
          </ul>
        ),
      },
      {
        title: "Запрещено",
        content: (
          <ul className="space-y-1">
            <li>Использовать СГУ без служебной необходимости.</li>
            <li>Включать сирену в жилых зонах в ночное время без оснований.</li>
            <li>Использовать для запугивания граждан вне рамок закона.</li>
            <li>Применять СГУ в личных целях или для развлечения.</li>
          </ul>
        ),
      },
      {
        title: "Режимы работы СГУ",
        content: (
          <ul className="space-y-1">
            <li><span className="text-[#d4af37] font-medium">Только маяк (без сирены)</span> — сопровождение колонны, обозначение присутствия патруля.</li>
            <li><span className="text-[#d4af37] font-medium">Маяк + сирена (постоянная)</span> — экстренный выезд, требование уступить дорогу.</li>
            <li><span className="text-[#d4af37] font-medium">Маяк + сирена (прерывистая)</span> — преследование, тревога.</li>
            <li><span className="text-[#d4af37] font-medium">Громкоговоритель</span> — голосовые команды толпе или водителям.</li>
          </ul>
        ),
      },
      {
        title: "Поведение водителей при СГУ",
        content: (
          <ul className="space-y-1">
            <li>Водители обязаны уступить дорогу транспорту с включённым СГУ.</li>
            <li>Перестроиться к обочине и остановиться до проезда экстренного ТС.</li>
            <li>Невыполнение требований — основание для остановки и составления протокола.</li>
          </ul>
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

export function PatrolServiceSection() {
  return (
    <section id="patrol" className="px-4 md:px-8 py-12 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-[#eef4ff] mb-2 text-center">Патрульная служба</h2>
      <p className="text-[#d4af37]/60 text-sm text-center mb-8 uppercase tracking-widest">Несение службы и специальные сигналы</p>
      <div className="space-y-3">
        {sections.map((section) => (
          <SectionBlock key={section.id} section={section} />
        ))}
      </div>
    </section>
  )
}
