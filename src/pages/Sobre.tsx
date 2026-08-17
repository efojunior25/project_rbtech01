import grid from '../components/Grid.module.css'
import formaturaImg from '../assets/img/formatura.jpg'

export default function Sobre() {
  return (
    <>
      <div className="container">
        <section className={grid.row}>
          <div className={grid.main}>
            <h1>Sobre mim</h1>
            <p>
              Sou Edson Feitosa de Oliveira Júnior, desenvolvedor Backend
              Java com experiência prática em Spring Boot, microsserviços e
              integrações em nuvem (AWS), unindo isso à atuação atual na
              frente de Análise de Dados. Minha trajetória começou na
              segurança eletrônica e passou pelo Mercado Livre antes de
              chegar à RD Distribuidora — um caminho que me ensinou a
              resolver problemas sob pressão e criar soluções que unem
              tecnologia e empatia.
            </p>
            <h2>O que venho construindo</h2>
            <p>
              Na RD Distribuidora, projetei e construí sozinho o{' '}
              <strong>Portal RD</strong> (Java Spring Boot + React/TypeScript),
              hoje em produção para os times Comercial e Logística, incluindo
              correções de segurança críticas e o desenho da arquitetura de
              autenticação mTLS. No Mercado Livre, fui autor original de um
              módulo de automação de conformidade de rede com mais de 1.000
              dispositivos monitorados, resultando em 30% de redução no tempo
              de operação dos processos automatizados.
            </p>
            <p>
              Também sou facilitador oficial do Google Cloud Arcade 2026 no
              Brasil e mantenho um portfólio backend ativo no GitHub, com
              APIs REST documentadas, testadas e containerizadas.
            </p>
          </div>
          <div className={grid.sidebar}>
            <h2>Formação Acadêmica</h2>
            <img src={formaturaImg} alt="Foto de formatura" />
            <ul>
              <li>
                Engenharia de Software — Centro Universitário UniFatecie
                (cursando, 2024–2027)
              </li>
              <li>
                Sistemas para Internet — Instituto Federal do Rio Grande do
                Norte (IFRN) (cursando, 2025–2027)
              </li>
            </ul>
            <h2>Principais Competências</h2>
            <ul>
              <li>Java, Spring Boot, Spring Security, Hibernate/JPA</li>
              <li>React, TypeScript, Angular, HTML5, CSS3</li>
              <li>SQL Server, PostgreSQL, MySQL</li>
              <li>AWS (EC2, S3, RDS), Docker, GitHub Actions</li>
              <li>JUnit, Mockito, SonarQube/SonarCloud</li>
            </ul>
            <a
              href="https://www.linkedin.com/in/efojunior25/"
              className="botao"
            >
              Ver perfil no LinkedIn &raquo;
            </a>
          </div>
        </section>
      </div>

      <div style={{ background: 'var(--color-extra-bg)' }}>
        <div className="container">
          <section style={{ paddingBlock: 20 }}>
            <h2>Curiosidades</h2>
            <p>
              Este site é meu primeiro projeto no GitHub. A versão atual é
              uma reescrita em React + Vite, comparada lado a lado com a
              versão original em HTML/CSS puro para mostrar minha evolução
              técnica ao longo do tempo.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
