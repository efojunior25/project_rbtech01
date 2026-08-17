import { useState, type FormEvent } from 'react'
import grid from '../components/Grid.module.css'
import styles from './Contato.module.css'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contato() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')

    // TODO: integrar com um endpoint real (ex: Formspree, EmailJS ou API
    // própria) antes de publicar em produção. Por enquanto simula o envio.
    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <div className="container">
        <section className={grid.row}>
          <div className={grid.main}>
            <h1>Envie Sua Mensagem</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label htmlFor="nome">Seu nome:</label>
              <input type="text" name="nome" id="nome" required />

              <label htmlFor="email">Seu E-mail:</label>
              <input type="email" name="email" id="email" required />

              <label htmlFor="assunto">Assunto:</label>
              <input type="text" name="assunto" id="assunto" required />

              <label htmlFor="mensagem">Sua Mensagem:</label>
              <textarea name="mensagem" id="mensagem" required />

              <button
                type="submit"
                className="botao"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem »'}
              </button>

              {status === 'sent' && (
                <p role="status" className={styles.sucesso}>
                  Mensagem enviada com sucesso!
                </p>
              )}
              {status === 'error' && (
                <p role="alert" className={styles.erro}>
                  Não foi possível enviar. Tente novamente.
                </p>
              )}
            </form>
          </div>
          <div className={grid.sidebar}>
            <h2>Localização</h2>
            <iframe
              title="Mapa da localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.6685717070827!2d-35.26057748597503!3d-5.760747395825157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3aa533615ba2d%3A0x7b98a3fc3e7d5703!2sAv.%20Esdras%20C%C3%A9sar%20da%20Silva%2C%202375%20-%20Potengi%2C%20Natal%20-%20RN%2C%2059108-240!5e0!3m2!1spt-BR!2sbr!4v1660606996434!5m2!1spt-BR!2sbr"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <ul>
              <li>Avenida Esdras Cesar da Silva, 2375</li>
              <li>Bairro Potengi</li>
              <li>Natal - RN</li>
            </ul>
            <h2>Contato Direto</h2>
            <ul>
              <li>
                LinkedIn:{' '}
                <a href="https://www.linkedin.com/in/efojunior25/">
                  linkedin.com/in/efojunior25
                </a>
              </li>
              <li>
                GitHub:{' '}
                <a href="https://github.com/efojunior25">
                  github.com/efojunior25
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
