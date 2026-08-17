import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

describe('App / roteamento', () => {
  it('renderiza a Home na rota "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )
    expect(
      screen.getByRole('heading', { name: /projeto em destaque/i }),
    ).toBeInTheDocument()
  })

  it('renderiza a página de Sobre na rota "/sobre"', () => {
    render(
      <MemoryRouter initialEntries={['/sobre']}>
        <App />
      </MemoryRouter>,
    )
    expect(
      screen.getByRole('heading', { name: /sobre mim/i }),
    ).toBeInTheDocument()
  })

  it('possui exatamente um <h1> por página (hierarquia de headings correta)', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })
})
