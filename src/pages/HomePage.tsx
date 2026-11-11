import { Hero } from '../components/Hero'
import { Agendamento } from '../components/sections/Agendamento'
import { Contato } from '../components/sections/Contato'
import { Depoimentos } from '../components/sections/Depoimentos'
import { Galeria } from '../components/sections/Galeria'
import { Servicos } from '../components/sections/Servicos'
import { Sobre } from '../components/sections/Sobre'

export function HomePage() {
  return (
    <>
      <Hero />
      <Sobre />
      <Servicos />
      <Depoimentos />
      <Galeria />
      <Agendamento />
      <Contato />
    </>
  )
}
