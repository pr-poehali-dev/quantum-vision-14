export type SubItem = {
  title: string
  content: React.ReactNode
}

export type Section = {
  id: string
  title: string
  icon: string
  items: SubItem[]
}
