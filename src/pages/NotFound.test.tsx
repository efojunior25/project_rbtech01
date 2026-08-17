import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

describe('NotFound (rota catch-all)', () => {
  it('mostra página 404 amigável com link de volta para a Home', () => {
    render(
      <MemoryRouter initialEntries={['/isso-nao-existe']}>
        <App />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', { name: /página não encontrada/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /voltar para a home/i }),
    ).toHaveAttribute('href', '/')
  })
})
