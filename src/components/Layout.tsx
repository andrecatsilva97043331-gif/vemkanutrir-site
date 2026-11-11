import { Outlet } from 'react-router-dom'

import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:m-0 focus:inline-flex focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-full focus:bg-oliva focus:px-4 focus:py-2 focus:text-bege focus:[clip:auto]"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <div id="conteudo-principal">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
