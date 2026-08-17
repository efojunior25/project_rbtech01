import styles from './Faq.module.css'

type Item = { pergunta: string; resposta: string }

const perguntas: Item[] = [
  {
    pergunta: 'Você está disponível para novas oportunidades?',
    resposta:
      'Sim. Atualmente na RD Distribuidora, mas aberto a conversas sobre oportunidades como desenvolvedor backend ou analista de dados.',
  },
  {
    pergunta: 'Trabalha remoto, presencial ou híbrido?',
    resposta:
      'Tenho experiência nos três modelos. Prioridade é o encaixe com a vaga, mas prefiro remoto ou híbrido quando possível.',
  },
  {
    pergunta: 'Quais tecnologias você mais gosta de usar?',
    resposta:
      'No backend, Java com Spring Boot. No frontend, React com TypeScript. Tenho interesse crescente em análise de dados e observabilidade.',
  },
  {
    pergunta: 'Você faz projetos freelance ou consultoria?',
    resposta:
      'Já atuo em regime de consultoria pontual com a Ibrowse. Para novos projetos freelance, é melhor conversar diretamente pelo formulário de contato.',
  },
  {
    pergunta: 'Onde posso ver seu código?',
    resposta:
      'No GitHub, em github.com/efojunior25 — incluindo o código-fonte deste próprio site.',
  },
  {
    pergunta: 'Qual o prazo médio de resposta?',
    resposta:
      'Costumo responder mensagens de contato em até 2 dias úteis.',
  },
]

export default function Faq() {
  return (
    <div className={styles.list}>
      {perguntas.map((item) => (
        <details key={item.pergunta} className={styles.item}>
          <summary className={styles.summary}>{item.pergunta}</summary>
          <p className={styles.resposta}>{item.resposta}</p>
        </details>
      ))}
    </div>
  )
}
