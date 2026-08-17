import Seo from '../components/Seo'

export default function Termos() {
  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <Seo
        title="Termos de Uso"
        description="Condições de uso do conteúdo publicado neste portfólio pessoal."
        path="/termos"
      />
      <h1>Termos de Uso</h1>
      <p>Última atualização: agosto de 2026.</p>

      <h2>Sobre este site</h2>
      <p>
        Este é um portfólio pessoal de Edson Feitosa de Oliveira Júnior,
        usado para apresentar experiência profissional, competências
        técnicas e formas de contato. Não é um produto comercial nem
        oferece serviços pagos diretamente por este site.
      </p>

      <h2>Conteúdo e propriedade intelectual</h2>
      <p>
        Os textos, código-fonte (salvo indicação em contrário no
        repositório) e ilustrações deste site pertencem ao autor. O
        código-fonte é público no GitHub sob a licença indicada no
        repositório; reaproveitamento do conteúdo textual/currículo
        requer autorização.
      </p>

      <h2>Uso do formulário de contato</h2>
      <p>
        O formulário existe para contato profissional legítimo (recrutamento,
        oportunidades, dúvidas técnicas). Uso para spam, divulgação não
        solicitada ou conteúdo ofensivo não é permitido.
      </p>

      <h2>Isenção de responsabilidade</h2>
      <p>
        As informações profissionais aqui apresentadas refletem a
        experiência declarada pelo autor. Links externos (LinkedIn, GitHub)
        levam a plataformas de terceiros, cujos termos são de
        responsabilidade dessas plataformas.
      </p>

      <p>
        Dúvidas sobre estes termos podem ser enviadas pela página de{' '}
        <a href="/contato">Contato</a>.
      </p>
    </div>
  )
}
