import styles from './Experiencia.module.css'
import grid from '../components/Grid.module.css'
import Seo from '../components/Seo'

const experiencias = [
  {
    cargo: 'Analista de Dados Pleno (atuação como Desenvolvedor Backend)',
    empresa: 'RD Distribuidora',
    periodo: '2026 — atual',
    destaques: [
      'Projetou e construiu sozinho o "Portal RD" (Java Spring Boot + React/TypeScript), hoje em produção para os times Comercial e Logística — ~95% de autoria confirmada via histórico Git.',
      'Corrigiu vulnerabilidades críticas herdadas: migração de hash de senha para BCrypt, eliminação de CORS permissivo e remoção de credenciais expostas no código-fonte.',
      'Projetou a arquitetura de autenticação mTLS por certificado de dispositivo (AD CS + GPO).',
      'Manteve fluxo estruturado de desenvolvimento com 52 pull requests revisados e integrados.',
    ],
  },
  {
    cargo: 'Desenvolvedor Jr I (consultoria pontual, ~20h/mês)',
    empresa: 'Ibrowse — Consultoria & Informática',
    periodo: 'out/2025 — atual',
    destaques: ['Atuação em regime de consultoria pontual em desenvolvimento, em paralelo à atuação principal.'],
  },
  {
    cargo: 'Junior Software Developer',
    empresa: 'Mercado Livre (Meli Developers BR)',
    periodo: 'dez/2022 — mar/2025',
    destaques: [
      'Autor original e único arquiteto do módulo de validação automática de switches Cisco via Cisco DNA Center, com mais de 1.000 dispositivos monitorados.',
      'Desenvolveu e manteve aplicações web em Java (Spring Boot) e React, com integração a MySQL, seguindo práticas de CI/CD e testes automatizados.',
      'Resultado divulgado: 30% de redução no tempo de operação de processos automatizados.',
    ],
  },
  {
    cargo: 'Assistente de Relacionamento do Aluno',
    empresa: 'Universidade Potiguar',
    periodo: 'abr/2021 — mar/2022',
    destaques: ['Atendimento presencial e virtual a alunos, suporte em demandas acadêmicas e financeiras, gestão documental.'],
  },
  {
    cargo: 'Secretário Acadêmico',
    empresa: 'IFRN — Campus Natal Cidade Alta',
    periodo: 'mar/2017 — mar/2019',
    destaques: ['Apoio administrativo em processos acadêmicos e atendimento a estudantes.'],
  },
  {
    cargo: 'Técnico em Segurança Eletrônica',
    empresa: 'COMSERMEL',
    periodo: 'jan/2002 — abr/2017',
    destaques: ['Instalação, configuração e manutenção de sistemas de segurança eletrônica (câmeras, alarmes, controle de acesso, cercas elétricas).'],
  },
]

const certificacoes = [
  'Formação Java Developer — DIO (2025)',
  'Formação Java Fundamentals — DIO (2025)',
  'Junior Developer (Java, Spring Boot, Git, Scrum) — Generation (2023)',
  'Git e GitHub: Controle e Compartilhe seu Código — Alura (2022)',
]

export default function Experiencia() {
  return (
    <>
      <Seo
        title="Experiência"
        description="Trajetória profissional de Edson Feitosa: RD Distribuidora, Mercado Livre, Ibrowse e formação em Engenharia de Software e Sistemas para Internet."
        path="/experiencia"
      />
      <div className="container">
        <section>
          <h1>Experiência Profissional</h1>
          <ol className={styles.timeline}>
            {experiencias.map((exp) => (
              <li key={exp.cargo + exp.empresa} className={styles.item}>
                <h2>{exp.cargo}</h2>
                <p className={styles.meta}>
                  {exp.empresa} · {exp.periodo}
                </p>
                <ul>
                  {exp.destaques.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div style={{ background: 'var(--color-extra-bg)' }}>
        <div className="container">
          <section className={grid.row}>
            <div className={grid.main}>
              <h2>Formação e diferenciais</h2>
              <p>
                Facilitador oficial do Google Cloud Arcade 2026 no Brasil e
                mantenedor de um portfólio backend ativo no GitHub, com APIs
                REST documentadas, testadas e containerizadas.
              </p>
            </div>
            <div className={grid.sidebar}>
              <h2>Certificações</h2>
              <ul>
                {certificacoes.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
