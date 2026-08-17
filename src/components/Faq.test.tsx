import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Faq from './Faq'

describe('Faq', () => {
  it('tem pelo menos 5 perguntas', () => {
    render(<Faq />)
    const perguntas = screen.getAllByRole('group')
    expect(perguntas.length).toBeGreaterThanOrEqual(5)
  })

  it('expande a resposta ao clicar na pergunta', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const primeiraPergunta = screen.getAllByRole('group')[0]
    expect(primeiraPergunta).not.toHaveAttribute('open')

    await user.click(screen.getAllByText(/\?/)[0])

    expect(primeiraPergunta).toHaveAttribute('open')
  })
})
