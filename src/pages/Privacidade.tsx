import Seo from '../components/Seo'

export default function Privacidade() {
  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <Seo
        title="Política de Privacidade"
        description="Como este site trata os dados enviados pelo formulário de contato e coleta de analytics."
        path="/privacidade"
      />
      <h1>Política de Privacidade</h1>
      <p>Última atualização: agosto de 2026.</p>

      <h2>Quem trata os dados</h2>
      <p>
        Este site é um portfólio pessoal mantido por Edson Feitosa de
        Oliveira Júnior. Não há venda ou compartilhamento de dados com
        terceiros para fins comerciais.
      </p>

      <h2>Formulário de contato</h2>
      <p>
        Ao preencher o formulário em <a href="/contato">Contato</a>, você
        envia nome, e-mail, assunto e mensagem. Esses dados são usados
        exclusivamente para responder ao seu contato e não são
        armazenados em banco de dados por este site (o envio é
        processado por um serviço de terceiros de formulário
        transacional).
      </p>

      <h2>Google Analytics</h2>
      <p>
        Quando ativo, este site usa o Google Analytics (GA4) para entender
        de forma agregada e anônima quantas pessoas visitam as páginas.
        O GA4 usa cookies e pode coletar endereço IP (anonimizado),
        páginas visitadas e duração da visita. Você pode bloquear esse
        rastreamento usando extensões como uBlock Origin ou desativando
        cookies de terceiros no navegador.
      </p>

      <h2>Seus direitos (LGPD)</h2>
      <p>
        Nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018),
        você pode solicitar a qualquer momento a confirmação, correção
        ou exclusão de dados pessoais eventualmente enviados por você,
        entrando em contato pelo e-mail informado na página de{' '}
        <a href="/contato">Contato</a>.
      </p>

      <h2>Cookies</h2>
      <p>
        Este site não usa cookies de rastreamento publicitário. Os únicos
        cookies possíveis são os do Google Analytics, quando ativo.
      </p>
    </div>
  )
}
