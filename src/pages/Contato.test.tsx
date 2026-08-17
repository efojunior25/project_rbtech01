import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contato from './Contato'

describe('Contato', () => {
  it('exige preenchimento dos campos obrigatórios antes de enviar', async () => {
    const user = userEvent.setup()
    render(<Contato />)

    const botaoEnviar = screen.getByRole('button', { name: /enviar mensagem/i })
    await user.click(botaoEnviar)

    const campoNome = screen.getByLabelText(/seu nome/i)
    expect(campoNome).toBeInvalid()
  })

  it('envia o formulário e mostra mensagem de sucesso', async () => {
    const user = userEvent.setup()
    render(<Contato />)

    await user.type(screen.getByLabelText(/seu nome/i), 'Maria Silva')
    await user.type(screen.getByLabelText(/seu e-mail/i), 'maria@example.com')
    await user.type(screen.getByLabelText(/assunto/i), 'Orçamento')
    await user.type(screen.getByLabelText(/sua mensagem/i), 'Olá, gostaria de um orçamento.')

    await user.click(screen.getByRole('button', { name: /enviar mensagem/i }))

    await waitFor(
      () =>
        expect(screen.getByRole('status')).toHaveTextContent(
          'Mensagem enviada com sucesso!',
        ),
      { timeout: 2000 },
    )
  })

  it('possui um mapa com título acessível para leitores de tela', () => {
    render(<Contato />)
    expect(
      screen.getByTitle('Mapa da localização'),
    ).toBeInTheDocument()
  })

  it('linka para LinkedIn e GitHub reais', () => {
    render(<Contato />)
    expect(
      screen.getByRole('link', { name: /linkedin\.com\/in\/efojunior25/i }),
    ).toHaveAttribute('href', 'https://www.linkedin.com/in/efojunior25/')
    expect(
      screen.getByRole('link', { name: /github\.com\/efojunior25/i }),
    ).toHaveAttribute('href', 'https://github.com/efojunior25')
  })
})
