import type { PropsWithChildren } from "react"

export const PageLayout = (props: PropsWithChildren) => {
  return <main className="min-h-screen">
    {props.children}
  </main>
}