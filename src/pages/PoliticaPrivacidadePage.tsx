import { Link } from 'react-router-dom'

import { SITE } from '../lib/site'

export function PoliticaPrivacidadePage() {
  return (
    <article className="bg-bege px-4 pb-20 pt-28 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <p className="font-sans text-sm text-marrom">
            <Link
              to="/"
              className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oliva"
            >
              ← Voltar ao início
            </Link>
          </p>
          <h1 className="font-display text-3xl font-semibold text-oliva sm:text-4xl">
            Política de privacidade
          </h1>
          <p className="font-sans text-sm text-marrom">
            Linguagem simples, alinhada à LGPD. Última atualização: março de 2026.
          </p>
        </header>

        <section className="space-y-3 font-sans text-base leading-relaxed text-oliva/90">
          <h2 className="font-display text-2xl font-semibold text-oliva">
            O que este site faz
          </h2>
          <p>
            Este é o site institucional de {SITE.nome}, nutricionista. Ele apresenta
            informações sobre atendimento, serviços e formas de contato. Não há
            cadastro de pacientes nem formulários que peçam dados de saúde.
          </p>
        </section>

        <section className="space-y-3 font-sans text-base leading-relaxed text-oliva/90">
          <h2 className="font-display text-2xl font-semibold text-oliva">
            Dados que não coletamos aqui
          </h2>
          <p>
            Não armazenamos no site dados pessoais sensíveis, histórico clínico,
            exames ou informações de saúde. O agendamento é feito pelo WhatsApp
            (aplicativo externo da Meta), sob as políticas daquela plataforma.
          </p>
        </section>

        <section className="space-y-3 font-sans text-base leading-relaxed text-oliva/90">
          <h2 className="font-display text-2xl font-semibold text-oliva">
            Contato e redes
          </h2>
          <p>
            Ao clicar em WhatsApp, e-mail ou Instagram, você sai deste site e
            passa a interagir com serviços de terceiros. Use apenas os canais
            oficiais: WhatsApp {SITE.whatsappExibicao}, {SITE.email} e @
            {SITE.instagram}.
          </p>
        </section>

        <section className="space-y-3 font-sans text-base leading-relaxed text-oliva/90">
          <h2 className="font-display text-2xl font-semibold text-oliva">
            Cookies e analytics
          </h2>
          <p>
            Nesta versão do site não utilizamos cookies de analytics nem
            rastreamento de marketing. Se isso mudar no futuro, esta página será
            atualizada e, se necessário, pediremos seu consentimento.
          </p>
        </section>

        <section className="space-y-3 font-sans text-base leading-relaxed text-oliva/90">
          <h2 className="font-display text-2xl font-semibold text-oliva">
            Seus direitos (LGPD)
          </h2>
          <p>
            Você pode pedir informações sobre o tratamento de dados relacionados
            ao atendimento profissional pelos canais oficiais. Para questões
            exclusivas deste site institucional, escreva para{' '}
            <a
              href={`mailto:${SITE.email}`}
              className="text-oliva underline underline-offset-4"
            >
              {SITE.email}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  )
}
