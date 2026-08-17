import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '60px 0', textAlign: 'center' }}>
      <Seo
        title="Página não encontrada"
        description="A página que você procura não existe ou foi movida."
        path="/404"
      />
      <h1>Página não encontrada</h1>
      <p>
        A página que você tentou acessar não existe ou foi movida para outro
        endereço.
      </p>
      <a href="/" className="botao">
        Voltar para a Home &raquo;
      </a>
    </div>
  )
}
