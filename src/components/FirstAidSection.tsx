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
          <p>Тактическая медицина — раздел военной медицины, обеспечивающий оказание первой помощи в боевых и экстремальных условиях. Цель — сохранить жизнь пострадавшего до эвакуации в медпункт или больницу. Отличие от гражданской медицины: помощь оказывается в условиях угрозы, ограниченного оснащения и нехватки времени.</p>
        ),
      },
      {
        title: "Принцип MARCH",
        content: (
          <ul className="space-y-2">
            <li><span className="text-[#d4af37] font-semibold">M — Massive bleeding</span> — остановка массивных кровотечений. Жгут, давящая повязка, тампонада раны.</li>
            <li><span className="text-[#d4af37] font-semibold">A — Airway</span> — обеспечение проходимости дыхательных путей. Запрокидывание головы, тройной приём Сафара.</li>
            <li><span className="text-[#d4af37] font-semibold">R — Respiration</span> — восстановление и поддержание дыхания. Окклюзионная повязка при пневмотораксе.</li>
            <li><span className="text-[#d4af37] font-semibold">C — Circulation</span> — поддержание кровообращения. Противошоковое положение, инфузии (при наличии).</li>
            <li><span className="text-[#d4af37] font-semibold">H — Hypothermia / Head</span> — предотвращение переохлаждения, помощь при травмах головы.</li>
          </ul>
        ),
      },
      {
        title: "Три фазы тактической медицины",
        content: (
          <ul className="space-y-2">
            <li><span className="text-[#d4af37] font-medium">Фаза 1 — Care Under Fire (под огнём):</span> устранить угрозу, наложить жгут на конечность, вынести пострадавшего из зоны огня. Не задерживаться — только жизненно важное.</li>
            <li><span className="text-[#d4af37] font-medium">Фаза 2 — Tactical Field Care (в укрытии):</span> полноценный осмотр по MARCH, перевязка всех ран, иммобилизация переломов, мониторинг состояния.</li>
            <li><span className="text-[#d4af37] font-medium">Фаза 3 — TACEVAC (эвакуация):</span> подготовка к транспортировке, стабилизация состояния, передача данных медикам.</li>
          </ul>
        ),
      },
      {
        title: "Необходимое снаряжение",
        content: (
          <ul className="space-y-1">
            <li><span className="text-[#d4af37] font-medium">Жгут турникетного типа</span> (CAT или аналог) — носить на себе, не в рюкзаке.</li>
            <li><span className="text-[#d4af37] font-medium">Перевязочный пакет (ИПП)</span> — стерильная повязка с прокладкой.</li>
            <li><span className="text-[#d4af37] font-medium">Окклюзионная наклейка</span> — для герметизации проникающих ранений груди.</li>
            <li><span className="text-[#d4af37] font-medium">Маркер</span> — записать время наложения жгута.</li>
            <li><span className="text-[#d4af37] font-medium">Перчатки латексные</span> — защита от биологических жидкостей.</li>
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
            <li><span className="text-[#d4af37] font-medium">Жгут</span> — устройство для остановки артериального кровотечения путём сдавления конечности выше раны.</li>
            <li><span className="text-[#d4af37] font-medium">Гемостаз</span> — остановка кровотечения любым методом.</li>
            <li><span className="text-[#d4af37] font-medium">Пневмоторакс</span> — скопление воздуха в плевральной полости, вызывающее коллапс лёгкого.</li>
            <li><span className="text-[#d4af37] font-medium">Тампонада раны</span> — заполнение раневого канала материалом для остановки кровотечения.</li>
            <li><span className="text-[#d4af37] font-medium">Эвакуация</span> — транспортировка пострадавшего в безопасное место или к медикам.</li>
            <li><span className="text-[#d4af37] font-medium">Триаж</span> — сортировка пострадавших по степени тяжести для определения приоритета помощи.</li>
            <li><span className="text-[#d4af37] font-medium">Иммобилизация</span> — фиксация повреждённой части тела для предотвращения дополнительных травм.</li>
          </ul>
        ),
      },
      {
        title: "Цвета триажа",
        content: (
          <ul className="space-y-2">
            <li><span className="text-red-400 font-semibold">🔴 Красный</span> — жизнеугрожающее состояние, требует немедленной помощи. Тяжёлые кровотечения, остановка дыхания.</li>
            <li><span className="text-yellow-400 font-semibold">🟡 Жёлтый</span> — серьёзные повреждения, состояние стабильное. Может подождать 30–60 минут.</li>
            <li><span className="text-green-400 font-semibold">🟢 Зелёный</span> — лёгкие повреждения, самостоятельно передвигается. Помощь оказывается в последнюю очередь.</li>
            <li><span className="text-gray-400 font-semibold">⚫ Чёрный</span> — несовместимые с жизнью повреждения или биологическая смерть. Помощь не оказывается.</li>
          </ul>
        ),
      },
      {
        title: "Признаки жизни",
        content: (
          <ul className="space-y-1">
            <li><span className="text-[#d4af37] font-medium">Дыхание</span> — движение грудной клетки, ощущение воздуха у рта и носа.</li>
            <li><span className="text-[#d4af37] font-medium">Пульс</span> — на сонной артерии (шея) или лучевой артерии (запястье).</li>
            <li><span className="text-[#d4af37] font-medium">Реакция зрачков</span> — сужение при засвечивании фонариком. Расширенные незреагирующие зрачки — плохой прогностический знак.</li>
            <li><span className="text-[#d4af37] font-medium">Сознание</span> — отклик на голос, боль, ориентация в пространстве.</li>
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
        title: "Оценка обстановки (безопасность прежде всего)",
        content: (
          <div className="space-y-2">
            <p>Прежде чем подходить к пострадавшему — убедись в собственной безопасности. Задай себе вопросы:</p>
            <ul className="space-y-1">
              <li>Есть ли угроза продолжения обстрела?</li>
              <li>Присутствует ли задымление, токсичные вещества?</li>
              <li>Устойчивы ли конструкции вокруг?</li>
              <li>Нет ли взрывоопасных предметов рядом?</li>
            </ul>
            <p>Только после устранения или минимизации угрозы — переходи к пострадавшему.</p>
          </div>
        ),
      },
      {
        title: "Алгоритм первичного осмотра (ABCDE)",
        content: (
          <ul className="space-y-2">
            <li><span className="text-[#d4af37] font-semibold">A — Airway:</span> проверь проходимость дыхательных путей. При необходимости — запрокинь голову, выдвини нижнюю челюсть.</li>
            <li><span className="text-[#d4af37] font-semibold">B — Breathing:</span> есть ли дыхание? 10 секунд наблюдения. Если нет — начни ИВЛ.</li>
            <li><span className="text-[#d4af37] font-semibold">C — Circulation:</span> проверь пульс и кровотечения. Начни с жгута при артериальном кровотечении.</li>
            <li><span className="text-[#d4af37] font-semibold">D — Disability:</span> оцени сознание (AVPU: Alert, Voice, Pain, Unresponsive).</li>
            <li><span className="text-[#d4af37] font-semibold">E — Exposure:</span> осмотр тела с головы до ног на скрытые ранения.</li>
          </ul>
        ),
      },
      {
        title: "Шкала AVPU (оценка сознания)",
        content: (
          <ul className="space-y-1">
            <li><span className="text-[#d4af37] font-medium">A — Alert</span> — в сознании, ориентируется, отвечает на вопросы.</li>
            <li><span className="text-[#d4af37] font-medium">V — Voice</span> — реагирует на голос, но не полностью в сознании.</li>
            <li><span className="text-[#d4af37] font-medium">P — Pain</span> — реагирует только на болевой раздражитель.</li>
            <li><span className="text-[#d4af37] font-medium">U — Unresponsive</span> — не реагирует ни на что. Критическое состояние.</li>
          </ul>
        ),
      },
      {
        title: "Позиция восстановления (стабильное боковое положение)",
        content: (
          <div className="space-y-1">
            <p>Применяется если пострадавший без сознания, но дышит самостоятельно.</p>
            <ul className="space-y-1">
              <li>Уложи на бок, согнув верхнее колено для устойчивости.</li>
              <li>Верхнюю руку подложи под голову.</li>
              <li>Голова запрокинута — язык не западает, дыхание свободно.</li>
              <li>Предотвращает аспирацию (вдыхание рвотных масс).</li>
              <li>Контролируй дыхание каждые 2 минуты.</li>
            </ul>
          </div>
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
            <li><span className="text-[#d4af37] font-medium">Давящая</span> — для остановки венозного и капиллярного кровотечения. Несколько слоёв бинта с давлением на рану.</li>
            <li><span className="text-[#d4af37] font-medium">Окклюзионная</span> — герметизация проникающего ранения грудной клетки. Использует воздухонепроницаемый материал.</li>
            <li><span className="text-[#d4af37] font-medium">Иммобилизирующая</span> — фиксация конечности при переломе с помощью шины и бинта.</li>
            <li><span className="text-[#d4af37] font-medium">Кольцевая (циркулярная)</span> — для небольших ран, первый и завершающий тур бинта.</li>
            <li><span className="text-[#d4af37] font-medium">Крестообразная</span> — для суставов (голеностоп, запястье).</li>
            <li><span className="text-[#d4af37] font-medium">Колосовидная</span> — для плечевого и тазобедренного суставов.</li>
          </ul>
        ),
      },
      {
        title: "Правила наложения повязки",
        content: (
          <ol className="space-y-1 list-decimal list-inside">
            <li>По возможности — вымой руки или надень перчатки.</li>
            <li>Промой рану чистой водой или антисептиком (если есть).</li>
            <li>Накрой рану стерильным материалом (индивидуальный пакет, чистая ткань).</li>
            <li>Забинтуй плотно, но без пережатия сосудов — проверь пульс ниже повязки.</li>
            <li>Каждый тур бинта перекрывает предыдущий на 1/2–2/3.</li>
            <li>Зафиксируй конец бинта булавкой, узлом или пластырем.</li>
            <li>Отметь время наложения.</li>
          </ol>
        ),
      },
      {
        title: "Жгут — правила наложения",
        content: (
          <ul className="space-y-1">
            <li>Применяется только при артериальном кровотечении из конечности.</li>
            <li>Накладывается выше раны на 5–7 см, поверх одежды или на голое тело.</li>
            <li>Затягивается до полной остановки кровотечения и исчезновения пульса ниже жгута.</li>
            <li><span className="text-red-400 font-semibold">Обязательно</span> записать время наложения на жгуте, коже или бумаге.</li>
            <li>Максимальное время: <span className="text-[#d4af37] font-medium">2 часа летом</span>, <span className="text-[#d4af37] font-medium">1 час зимой</span>.</li>
            <li>Жгут не накрывать одеждой — он должен быть виден медикам.</li>
            <li>Ослаблять жгут самостоятельно запрещено — только медики.</li>
          </ul>
        ),
      },
      {
        title: "Тампонада раны",
        content: (
          <div className="space-y-1">
            <p>Применяется при ранениях в места, куда жгут не наложить (пах, подмышка, шея).</p>
            <ul className="space-y-1">
              <li>Надень перчатки.</li>
              <li>Плотно набей рану гемостатическим или обычным бинтом, начиная с глубины.</li>
              <li>Давить на рану не менее 3–5 минут.</li>
              <li>Поверх — давящая повязка.</li>
              <li>Не убирать тампон — пусть медики делают это в условиях.</li>
            </ul>
          </div>
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
            <li><span className="text-[#d4af37] font-medium">На руках</span> — при коротких дистанциях и отсутствии травм позвоночника.</li>
            <li><span className="text-[#d4af37] font-medium">На носилках</span> — основной способ. 2–4 человека, передвигаются синхронно.</li>
            <li><span className="text-[#d4af37] font-medium">Волоком (за одежду или руки)</span> — при угрозе жизни и отсутствии других возможностей. Голова на предплечье несущего.</li>
            <li><span className="text-[#d4af37] font-medium">Пожарный захват (на спине)</span> — переноска одним бойцом, пострадавший через плечо.</li>
            <li><span className="text-[#d4af37] font-medium">Переноска двумя (захват за запястья и колени)</span> — при отсутствии носилок, подозрение на перелом позвоночника.</li>
          </ul>
        ),
      },
      {
        title: "Запрещено при транспортировке",
        content: (
          <ul className="space-y-1">
            <li>Сгибать позвоночник при подозрении на его травму.</li>
            <li>Поднимать пострадавшего за одну конечность.</li>
            <li>Транспортировать без предварительной фиксации переломов.</li>
            <li>Оставлять пострадавшего без контроля дыхания во время переноски.</li>
            <li>Давать воду или пищу пострадавшему в бессознательном состоянии.</li>
          </ul>
        ),
      },
      {
        title: "Положение при транспортировке",
        content: (
          <ul className="space-y-1">
            <li><span className="text-[#d4af37] font-medium">Без сознания, дышит</span> — восстановительное положение на боку.</li>
            <li><span className="text-[#d4af37] font-medium">Подозрение на травму позвоночника</span> — строго горизонтально, без поворотов, шейный воротник.</li>
            <li><span className="text-[#d4af37] font-medium">Ранение грудной клетки</span> — полусидячее положение (угол 30–45°), повреждённая сторона вниз.</li>
            <li><span className="text-[#d4af37] font-medium">Шок (потеря крови)</span> — горизонтально, ноги подняты на 20–30 см (если нет травм ног).</li>
            <li><span className="text-[#d4af37] font-medium">Переломы конечностей</span> — зафиксировать шиной до транспортировки.</li>
          </ul>
        ),
      },
      {
        title: "Импровизированные носилки",
        content: (
          <ul className="space-y-1">
            <li><span className="text-[#d4af37] font-medium">Из одежды:</span> продеть два шеста/ружья через рукава двух курток — готовые носилки.</li>
            <li><span className="text-[#d4af37] font-medium">Из одеяла/плащ-палатки:</span> свернуть края, создав ручки.</li>
            <li><span className="text-[#d4af37] font-medium">Из лестницы или двери:</span> зафиксировать пострадавшего ремнями.</li>
            <li>Тестируй носилки перед использованием — убедись в прочности.</li>
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
            <li>Остановить кровотечение: жгут при ранении конечностей, тампонада при ранении туловища.</li>
            <li>При ранении грудной клетки — окклюзионная повязка (герметизировать входное и выходное отверстие).</li>
            <li>Не извлекать инородные предметы из раны — только фиксировать их.</li>
            <li>Мониторить дыхание и сознание каждые 2 минуты.</li>
            <li>При признаках напряжённого пневмоторакса — немедленная эвакуация.</li>
          </ul>
        ),
      },
      {
        title: "Термические ожоги",
        content: (
          <ul className="space-y-1">
            <li>Охладить место ожога холодной водой 10–20 минут. Не льдом — это усугубляет повреждение.</li>
            <li>Не вскрывать пузыри, не наносить масло, крем, зубную пасту.</li>
            <li>Снять одежду и украшения вокруг ожога, если не прилипли.</li>
            <li>Накрыть стерильной влажной повязкой.</li>
            <li>При обширных ожогах (более 10% тела) — немедленная эвакуация, угроза шока.</li>
            <li><span className="text-red-400 font-medium">Опасно:</span> ожоги лица, шеи, дыхательных путей — приоритет эвакуации.</li>
          </ul>
        ),
      },
      {
        title: "Переломы",
        content: (
          <ul className="space-y-1">
            <li>Зафиксировать конечность шиной (доска, палка, скатка, зонт).</li>
            <li>Шина захватывает два сустава — выше и ниже перелома.</li>
            <li>Подложить под шину мягкую прокладку (одежда, бинт).</li>
            <li>При открытом переломе — сначала стерильная повязка на рану, затем шина.</li>
            <li>Не вправлять кость самостоятельно.</li>
            <li>Проверить пульс и чувствительность конечности после наложения шины.</li>
          </ul>
        ),
      },
      {
        title: "Вывихи и растяжения",
        content: (
          <ul className="space-y-1">
            <li>Зафиксировать сустав в том положении, в котором он находится.</li>
            <li>Приложить холод через ткань на 15–20 минут.</li>
            <li>Не пытаться вправить вывих самостоятельно — только врач.</li>
            <li>При растяжении — эластичная повязка (8-образная для голеностопа).</li>
            <li>Возвышенное положение повреждённой конечности снижает отёк.</li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "mechanical",
    title: "Механические повреждения",
    icon: "🩻",
    items: [
      {
        title: "Контузия",
        content: (
          <div className="space-y-2">
            <p><span className="text-[#d4af37] font-semibold">Контузия</span> — поражение от взрывной волны без видимых ранений. Вызывает баротравму внутренних органов, мозга, органов слуха.</p>
            <p className="text-[#d4af37] font-medium">Симптомы:</p>
            <ul className="space-y-1">
              <li>Оглушение, временная потеря слуха или зрения.</li>
              <li>Дезориентация, спутанность сознания.</li>
              <li>Тошнота, рвота, головная боль.</li>
              <li>Потеря сознания на короткое время.</li>
            </ul>
            <p className="text-[#d4af37] font-medium mt-2">Первая помощь:</p>
            <ul className="space-y-1">
              <li>Вынести из зоны взрыва, уложить на бок в тихом месте.</li>
              <li>Расстегнуть воротник, обеспечить приток свежего воздуха.</li>
              <li>Не давать воду при нарушении сознания.</li>
              <li>Контролировать дыхание, не оставлять одного.</li>
              <li>Немедленная эвакуация — возможно внутреннее кровотечение.</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Кома",
        content: (
          <div className="space-y-2">
            <p><span className="text-[#d4af37] font-semibold">Кома</span> — глубокое нарушение сознания с отсутствием реакций на внешние раздражители. Причины: ЧМТ, кровотечение, отравление, шок.</p>
            <p className="text-[#d4af37] font-medium">Действия при коме:</p>
            <ul className="space-y-1">
              <li>Уложить в восстановительное положение на бок.</li>
              <li>Обеспечить проходимость дыхательных путей — осмотреть полость рта, убрать инородные тела.</li>
              <li>Контролировать дыхание и пульс каждые 2 минуты.</li>
              <li>Не давать воду, еду, лекарства через рот.</li>
              <li>Не пытаться привести в сознание — резкие движения опасны.</li>
              <li>Немедленная эвакуация к медикам.</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Раны",
        content: (
          <div className="space-y-2">
            <p className="text-[#d4af37] font-medium">Виды ран:</p>
            <ul className="space-y-1">
              <li><span className="text-[#d4af37] font-medium">Резаная</span> — ровные края, обильное кровотечение, хорошо заживает.</li>
              <li><span className="text-[#d4af37] font-medium">Рваная</span> — неровные края, высокий риск инфекции.</li>
              <li><span className="text-[#d4af37] font-medium">Колотая</span> — малое входное отверстие, глубокий канал, опасна внутренним кровотечением.</li>
              <li><span className="text-[#d4af37] font-medium">Огнестрельная</span> — входное и выходное отверстие, тяжёлые повреждения тканей.</li>
              <li><span className="text-[#d4af37] font-medium">Осколочная</span> — множественные неравномерные повреждения.</li>
            </ul>
            <p className="text-[#d4af37] font-medium mt-2">Первая помощь:</p>
            <ul className="space-y-1">
              <li>Прижать рану рукой (в перчатке) и держать давление.</li>
              <li>Наложить стерильную давящую повязку.</li>
              <li>При глубоких ранениях — тампонада и повязка.</li>
              <li>Не промывать глубокие раны, не удалять инородные тела.</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Кровотечения",
        content: (
          <div className="space-y-2">
            <p className="text-[#d4af37] font-medium">Определение типа кровотечения:</p>
            <ul className="space-y-1">
              <li><span className="text-red-400 font-semibold">Артериальное</span> — алая кровь, бьёт пульсирующей струёй. Самое опасное. Жгут выше раны.</li>
              <li><span className="text-orange-400 font-semibold">Венозное</span> — тёмная кровь, вытекает ровно. Давящая повязка, поднять конечность.</li>
              <li><span className="text-yellow-400 font-semibold">Капиллярное</span> — кровь сочится равномерно по всей поверхности. Чистая повязка.</li>
              <li><span className="text-purple-400 font-semibold">Внутреннее</span> — бледность, холодный пот, слабый пульс, боль в животе. Только эвакуация.</li>
            </ul>
            <p className="text-[#d4af37] font-medium mt-2">Порядок действий:</p>
            <ul className="space-y-1">
              <li>Прижать рану — зафиксировать давление.</li>
              <li>При конечности + артериальное — жгут немедленно.</li>
              <li>Поднять повреждённую конечность выше сердца.</li>
              <li>Эвакуировать в медпункт при любом значимом кровотечении.</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Черепно-мозговая травма (ЧМТ)",
        content: (
          <div className="space-y-2">
            <p className="text-[#d4af37] font-medium">Признаки ЧМТ:</p>
            <ul className="space-y-1">
              <li>Потеря сознания (даже кратковременная).</li>
              <li>Рвота, тошнота.</li>
              <li>Неравномерные зрачки или отсутствие реакции на свет.</li>
              <li>Кровь или прозрачная жидкость из ушей, носа.</li>
              <li>Нарушение речи, координации, памяти.</li>
            </ul>
            <p className="text-[#d4af37] font-medium mt-2">Первая помощь:</p>
            <ul className="space-y-1">
              <li>Уложить горизонтально, зафиксировать голову и шею.</li>
              <li>Не давать ничего есть и пить.</li>
              <li>Не оставлять одного.</li>
              <li>При рвоте — осторожно повернуть на бок, сохраняя ось голова-шея-тело.</li>
              <li>Немедленная эвакуация к медикам.</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Шок",
        content: (
          <div className="space-y-2">
            <p><span className="text-[#d4af37] font-semibold">Шок</span> — острая недостаточность кровообращения. Развивается при массивной кровопотере, сильной боли, тяжёлых травмах.</p>
            <p className="text-[#d4af37] font-medium">Признаки:</p>
            <ul className="space-y-1">
              <li>Бледная, холодная, влажная кожа.</li>
              <li>Частый слабый пульс.</li>
              <li>Поверхностное учащённое дыхание.</li>
              <li>Заторможенность, спутанность, жажда.</li>
            </ul>
            <p className="text-[#d4af37] font-medium mt-2">Противошоковые меры:</p>
            <ul className="space-y-1">
              <li>Остановить кровотечение.</li>
              <li>Уложить горизонтально, поднять ноги на 20–30 см (если нет травм ног).</li>
              <li>Согреть одеялом, не давать замёрзнуть.</li>
              <li>Не давать воду (при ранении живота — категорически).</li>
              <li>Немедленная эвакуация.</li>
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
