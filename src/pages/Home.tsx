import grid from '../components/Grid.module.css'
import thumbGrande from '../assets/img/thumb-grande.jpg'

const empresas = [
  'RD Distribuidora',
  'Mercado Livre (Meli Developers BR)',
  'Ibrowse — Consultoria & Informática',
  'Universidade Potiguar',
  'IFRN',
  'COMSERMEL',
]

const certificacoes = [
  'Formação Java Developer — DIO (2025)',
  'Junior Developer (Java, Spring Boot, Git, Scrum) — Generation (2023)',
  'Git e GitHub: Controle e Compartilhe seu Código — Alura (2022)',
]

export default function Home() {
  return (
    <>
      <div className="container">
        <section className={grid.row}>
          <div className={grid.main}>
            <h1>
              Projeto em destaque: <em>Portal RD</em>
            </h1>
            <img
              src={thumbGrande}
              alt="Representação do Portal RD, sistema Java Spring Boot + React/TypeScript"
            />
            <p>
              Projetei e construí sozinho o Portal RD (Java Spring Boot +
              React/TypeScript), hoje em produção para os times Comercial e
              Logística da RD Distribuidora — incluindo correções de
              segurança críticas e a arquitetura de autenticação mTLS.
            </p>
            <a href="/experiencia" className="botao">
              Ver toda a experiência &raquo;
            </a>
          </div>
          <div className={grid.sidebar}>
            <h2>Empresas onde atuei</h2>
            <ul>
              {empresas.map((empresa) => (
                <li key={empresa}>
                  <a href="/experiencia">{empresa}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <div style={{ background: 'var(--color-extra-bg)' }}>
        <div className="container">
          <section className={grid.row}>
            <div className={grid.half}>
              <h2>Por que me contratar</h2>
              <p>
                Desenvolvedor Backend Java com experiência prática em Spring
                Boot, microsserviços e integrações em nuvem (AWS), unindo
                isso à atuação atual na frente de Análise de Dados.
              </p>
              <p>
                Facilitador oficial do Google Cloud Arcade 2026 no Brasil,
                busco oportunidades para evoluir como desenvolvedor backend
                sênior ou analista de dados, em ambientes que valorizem
                qualidade de código, automação e impacto real.
              </p>
            </div>
            <div className={grid.half}>
              <h2>Certificações recentes</h2>
              <ul>
                {certificacoes.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <a href="/competencias" className="botao">
                Ver todas as competências &raquo;
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
