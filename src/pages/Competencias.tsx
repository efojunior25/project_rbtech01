import grid from '../components/Grid.module.css'
import ideiaImg from '../assets/img/ideia.jpg'

const categorias = [
  {
    titulo: 'Backend',
    itens: 'Java, Spring Boot, Spring Security, Spring MVC, Spring Web, Hibernate/JPA, Maven',
  },
  {
    titulo: 'Frontend',
    itens: 'React, TypeScript, Angular, HTML5, CSS3',
  },
  {
    titulo: 'Banco de Dados',
    itens: 'SQL Server (replicação transacional), PostgreSQL, MySQL',
  },
  {
    titulo: 'Mensageria',
    itens: 'Kafka, RabbitMQ (estudos e POCs)',
  },
  {
    titulo: 'Cloud / DevOps',
    itens: 'AWS (EC2, S3, RDS), Docker, Jenkins, GitHub Actions, Google Cloud',
  },
  {
    titulo: 'Qualidade',
    itens: 'JUnit, Mockito, testes de integração, SonarQube/SonarCloud, JaCoCo',
  },
  {
    titulo: 'Ferramentas',
    itens: 'Postman, IntelliJ, VSCode, Swagger/OpenAPI, Jira, Git/GitHub',
  },
  {
    titulo: 'Metodologias Ágeis',
    itens: 'Scrum, Kanban',
  },
]

export default function Competencias() {
  return (
    <>
      <div className="container">
        <section className={grid.row}>
          <div className={grid.main}>
            <h1>Competências Técnicas</h1>
            <img
              src={ideiaImg}
              alt="Ilustração representando geração de ideias"
            />
            {categorias.map((c) => (
              <div key={c.titulo}>
                <h2>{c.titulo}</h2>
                <p>{c.itens}</p>
              </div>
            ))}
          </div>
          <div className={grid.sidebar}>
            <h2>Áreas</h2>
            <ul>
              {categorias.map((c) => (
                <li key={c.titulo}>{c.titulo}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <div style={{ background: 'var(--color-extra-bg)' }}>
        <div className="container">
          <section style={{ paddingBlock: 20 }}>
            <h2>Idiomas</h2>
            <p>Inglês intermediário (fala e escrita), Espanhol básico.</p>
          </section>
        </div>
      </div>
    </>
  )
}
